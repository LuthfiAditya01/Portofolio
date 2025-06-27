import { Link, type LinkProps } from 'react-router-dom';
import { type MouseEvent } from 'react';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
}

export default function ScrollToTopLink({ children, to, ...props }: ScrollToTopLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Scroll ke atas dengan smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Jika ada onClick handler lain, jalankan juga
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Link 
      to={to} 
      {...props}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
} 