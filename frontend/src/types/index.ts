export interface User {
  id: string;
  name: string;
  email: string;
  role: 'child' | 'parent';
  age?: number;
  screenTimeLimit: number;
  achievements: Achievement[];
  progress: Progress;
}

export interface Progress {
  totalPoints: number;
  completedActivities: string[];
  learningPath: string[];
  skillLevels: Record<string, number>;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: Date;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'game' | 'video' | 'reading' | 'exercise';
  content: any;
  ageRange: {
    min: number;
    max: number;
  };
  difficulty: number;
  subjects: string[];
  duration: number;
  points: number;
} 