// Simplified SM-2 Spaced Repetition Algorithm
// Based on Ebbinghaus forgetting curve

export interface RepetitionCard {
  moduleId: string;
  interval: number; // days until next review
  repetitions: number; // number of times reviewed
  easeFactor: number; // quality multiplier
  nextReviewDate: Date;
  lastReviewDate?: Date;
  quality?: number; // 0-5 rating from last review
}

interface ReviewQuality {
  rating: number; // 0-5
  description: string;
}

// SM-2 algorithm parameters
const INITIAL_INTERVAL = 1; // 1 day
const INITIAL_EASE_FACTOR = 2.5;
const MIN_EASE_FACTOR = 1.3;
const INTERVALS = [1, 3, 7, 21, 60]; // days for first 5 reviews

export class SpacedRepetitionManager {
  // Initialize a new card for spaced repetition
  static initializeCard(moduleId: string): RepetitionCard {
    const now = new Date();
    const nextReviewDate = new Date(now.getTime() + INITIAL_INTERVAL * 24 * 60 * 60 * 1000);

    return {
      moduleId,
      interval: INITIAL_INTERVAL,
      repetitions: 0,
      easeFactor: INITIAL_EASE_FACTOR,
      nextReviewDate,
      lastReviewDate: undefined,
      quality: undefined,
    };
  }

  // Update card after a review
  // quality: 0=complete blackout, 5=perfect response
  static updateCard(
    card: RepetitionCard,
    quality: number
  ): RepetitionCard {
    quality = Math.max(0, Math.min(5, quality)); // Clamp 0-5

    const repetitions = card.repetitions + 1;
    let easeFactor = card.easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor);

    let interval: number;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 3;
    } else {
      interval = Math.round(card.interval * easeFactor);
    }

    const now = new Date();
    const nextReviewDate = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

    return {
      ...card,
      interval,
      repetitions,
      easeFactor,
      nextReviewDate,
      lastReviewDate: now,
      quality,
    };
  }

  // Get review quality descriptors
  static getQualityOptions(): ReviewQuality[] {
    return [
      { rating: 0, description: 'No entendí nada' },
      { rating: 1, description: 'Mucho esfuerzo' },
      { rating: 2, description: 'Entendí pero con dificultad' },
      { rating: 3, description: 'Entendí pero con pequeñas pausas' },
      { rating: 4, description: 'Entendí bien' },
      { rating: 5, description: 'Entendí perfectamente' },
    ];
  }

  // Check if a card is due for review
  static isDueForReview(card: RepetitionCard): boolean {
    return new Date() >= card.nextReviewDate;
  }

  // Get days until next review
  static daysUntilReview(card: RepetitionCard): number {
    const now = new Date();
    const diffTime = card.nextReviewDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  }

  // Get review statistics
  static getStats(cards: RepetitionCard[]) {
    const dueNow = cards.filter((c) => this.isDueForReview(c)).length;
    const totalReviews = cards.reduce((sum, c) => sum + c.repetitions, 0);
    const avgEaseFactor = (
      cards.reduce((sum, c) => sum + c.easeFactor, 0) / Math.max(1, cards.length)
    ).toFixed(2);

    return {
      totalCards: cards.length,
      dueNow,
      totalReviews,
      avgEaseFactor,
    };
  }
}

// Database schema for Spaced Repetition
export const spacedRepetitionSchema = `
CREATE TABLE spaced_repetition (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  module_id VARCHAR NOT NULL,
  interval INTEGER DEFAULT 1,
  repetitions INTEGER DEFAULT 0,
  ease_factor DECIMAL(4,2) DEFAULT 2.5,
  next_review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_review_date TIMESTAMP,
  last_quality INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, module_id)
);

CREATE INDEX idx_sr_next_review ON spaced_repetition(user_id, next_review_date);
CREATE INDEX idx_sr_user ON spaced_repetition(user_id);
`;
