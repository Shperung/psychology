import { useRouter } from 'next/router';

import transRu from './ru.json';

export function useTrans() {
  const { locale } = useRouter();
  const t = text => {
    return locale === 'ru' ? transRu[text] : text;
  };
  return { t };
}

export default function T(props) {
  const { children } = props;
  const { locale } = useRouter();

  if (locale === 'ru') return <>{transRu[children] || children}</>;

  return <>{children}</>;
}
