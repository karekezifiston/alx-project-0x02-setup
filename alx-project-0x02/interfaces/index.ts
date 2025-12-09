// Card Component Props
export interface CardProps {
  title: string;
  content: string;
}

// Post Component Props
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// Post Data (for modal and state management)
export interface PostData {
  id?: number;
  title: string;
  content: string;
}

// Button Component Props
export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
  onClick?: () => void;
}

// User Component Props
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}