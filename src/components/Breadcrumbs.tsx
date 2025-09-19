import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const getBreadcrumbLabel = (pathname: string, index: number) => {
    const segment = pathnames[index];
    
    switch (pathname) {
      case '/':
        return 'Главная';
      case '/services':
        return 'Услуги';
      case '/services/technical-audit':
        return 'Технический аудит';
      case '/services/content-optimization':
        return 'Контентная оптимизация';
      case '/services/link-building':
        return 'Внешняя оптимизация';
      case '/services/analytics':
        return 'Аналитика и отчетность';
      case '/cases':
        return 'Кейсы';
      case '/how-it-works':
        return 'Как это работает';
      case '/privacy':
        return 'Политика конфиденциальности';
      default:
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Главная', href: '/' }
  ];

  let currentPath = '';
  pathnames.forEach((pathname, index) => {
    currentPath += `/${pathname}`;
    const isLast = index === pathnames.length - 1;
    
    breadcrumbs.push({
      label: getBreadcrumbLabel(currentPath, index),
      href: isLast ? undefined : currentPath
    });
  });

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={index} className="flex items-center space-x-2">
          {index === 0 && <Home className="w-4 h-4" />}
          
          {breadcrumb.href ? (
            <Link 
              to={breadcrumb.href} 
              className="hover:text-primary transition-colors"
            >
              {breadcrumb.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">
              {breadcrumb.label}
            </span>
          )}
          
          {index < breadcrumbs.length - 1 && (
            <ChevronRight className="w-4 h-4" />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;