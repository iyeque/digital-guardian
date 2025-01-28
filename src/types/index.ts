export interface User {
  id: string;
  name: string;
  age: number;
  role: 'child' | 'parent';
  screenTimeLimit: number;
  achievements: Achievement[];
  progress: Progress;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: Date;
}

export interface Progress {
  totalPoints: number;
  completedActivities: string[];
  learningPath: string[];
  skillLevels: Record<string, number>;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  type: 'game' | 'video' | 'reading' | 'exercise';
  ageRange: {
    min: number;
    max: number;
  };
  difficulty: 1 | 2 | 3 | 4 | 5;
  subjects: string[];
  duration: number;
} 