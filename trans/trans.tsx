import transRu from '../trans/ru.json';

export default function Trans(props) {
  const { children, lang } = props;

  if (lang === 'ru') return <>{transRu[children] || children}</>;

  return <>{children}</>;
}
