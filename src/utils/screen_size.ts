export function isMobile(window: Window): boolean {
  if (window.innerWidth <= 688) return true;

  return false;
}

export function isTablet(window: Window): boolean {
  if (window.innerWidth > 688 && window.innerWidth <= 992) return true;

  return false;
}

export function isDesktop(window: Window): boolean {
  if (window.innerWidth > 992) return true;

  return false;
}
