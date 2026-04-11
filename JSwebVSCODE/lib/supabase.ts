import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL']!;
const supabaseAnonKey = process.env['NEXT_PUBLIC_SUPABASE_ANON_KEY']!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface User {
  id: string;
  email: string;
  name: string;
  age: number;
  created_at: string;
}

export interface ModuleProgress {
  id: string;
  user_id: string;
  module_id: string;
  completed: boolean;
  completed_date?: string;
  next_review_date?: string;
  streak_days: number;
  last_accessed: string;
}

export interface Conversation {
  id: string;
  user_id: string;
  module_id: string;
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
    timestamp: string;
  }>;
  concepts_detected: string[];
  created_at: string;
}

// Auth helpers
export async function signUp(email: string, password: string, name: string, age: number) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { name, age },
    },
  });
  return { data, error };
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
}

export async function signOut() {
  return await supabase.auth.signOut();
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Progress helpers
export async function saveModuleProgress(userId: string, moduleId: string, completed: boolean) {
  const { data, error } = await supabase
    .from('module_progress')
    .insert([
      {
        user_id: userId,
        module_id: moduleId,
        completed,
        completed_date: completed ? new Date().toISOString() : null,
      },
    ])
    .select();
  return { data, error };
}

export async function getModuleProgress(userId: string) {
  const { data, error } = await supabase
    .from('module_progress')
    .select('*')
    .eq('user_id', userId);
  return { data, error };
}
