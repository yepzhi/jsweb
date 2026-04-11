'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle2, Lock, ArrowRight, LucideIcon, Microscope, Zap, Code2, Atom } from 'lucide-react';

interface ModuleCardProps {
  id: string;
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  duration?: number;
  badge?: string;
  badgeType?: 'urgent' | 'soon' | 'later';
  progress?: number;
  completed?: boolean;
  locked?: boolean;
}

export default function ModuleCard({
  id,
  title,
  subtitle,
  icon: Icon = Atom,
  duration,
  badge,
  badgeType = 'soon',
  progress = 0,
  completed = false,
  locked = false,
}: ModuleCardProps) {
  const badgeStyles = {
    urgent: 'bg-destructive/10 text-destructive',
    soon: 'bg-accent/10 text-accent',
    later: 'bg-muted-foreground/10 text-muted-foreground',
  };

  return (
    <Link
      href={locked ? '#' : `/modules/${id}`}
      className={`group relative flex flex-col p-6 bg-card border border-border rounded-md transition-all duration-300 ${
        locked ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/50 hover:shadow-lg cursor-pointer'
      }`}
    >
      {/* Badge & Icon Header */}
      <div className="flex justify-between items-start mb-4">
        {badge ? (
          <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${badgeStyles[badgeType]}`}>
            {badge}
          </span>
        ) : (
          <div />
        )}
        
        <div className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-sm">
          {locked ? (
            <Lock className="w-4.5 h-4.5 text-muted-foreground" />
          ) : (
            <Icon className="w-4.5 h-4.5 text-muted-foreground group-hover:text-primary transition-colors" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 mt-auto">
        <h4 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h4>
        {subtitle && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{subtitle}</span>
          </div>
        )}
      </div>

      {/* Progress Footer (Optional) */}
      {progress > 0 && !completed && (
        <div className="mt-4 pt-4 border-t border-border space-y-2">
          <div className="flex justify-between text-[11px] font-medium">
            <span className="text-muted-foreground">Progreso</span>
            <span className="text-foreground">{progress}%</span>
          </div>
          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {completed && (
        <div className="absolute top-6 right-6 text-primary">
          <CheckCircle2 className="w-5 h-5" />
        </div>
      )}
    </Link>
  );
}

export function ModuleHero({ 
  id, 
  title, 
  chapter, 
  progress 
}: { 
  id: string, 
  title: string, 
  chapter: string, 
  progress: number 
}) {
  return (
    <div className="hero-gradient border border-primary/40 rounded-md p-8 md:p-10 relative overflow-hidden group">
      {/* Background Decorative Icon */}
      <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity">
        <Atom className="w-80 h-80 text-foreground" strokeWidth={1} />
      </div>

      <div className="relative z-10 flex flex-col gap-6">
        <div className="space-y-2">
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-[11px] font-bold rounded-full uppercase tracking-widest">
            {chapter}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
        </div>

        <div className="max-w-md w-full space-y-3">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-muted-foreground">Progreso del módulo</span>
            <span className="text-foreground">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-700" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Link 
          href={`/modules/${id}`}
          className="btn-primary w-fit inline-flex items-center gap-2 px-7 py-3.5 rounded-md font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
        >
          Continuar Módulo
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
