import React, { useRef } from 'react';
import { Link } from 'gatsby';
import classnames from 'classnames';

interface Props {
  key: string;
  isLearn?: boolean;
  isRead: boolean;
  isActive: boolean;
  slug: string;
  title: string;
  onClick?: () => void;
}

const NavigationItem = ({
  isLearn = true,
  isRead,
  isActive,
  slug,
  title,
  onClick,
}: Props): JSX.Element => {
  const className = isLearn
    ? classnames('t-body2 side-nav__item', {
        'side-nav__item--done': isRead,
        'side-nav__item--active': !isRead && isActive,
      })
    : classnames('t-body2 side-nav__item-community', {
        'side-nav__item-community--active': isActive,
      });

  const element = useRef<HTMLAnchorElement | null>(null);
  const handleRef = (ref?: HTMLAnchorElement | null): void => {
    if (ref && isActive) {
      element.current = ref;
    }
  };

  return (
    <Link
      innerRef={handleRef}
      to={`/learn/${slug}`}
      id={`link-${slug}`}
      onClick={onClick}
      className={className}
    >
      {title}
    </Link>
  );
};

export default NavigationItem;
