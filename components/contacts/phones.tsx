export default function PhonesBlock() {
  const phoneIcon = (
    <img
      style={{ verticalAlign: 'middle' }}
      alt="зателефонувати"
      width="16px"
      height="16px"
      src="/icons/call.svg"
    />
  );

  return (
    <>
      <span>
        {phoneIcon}
        <a href="tel:+380939167544">+38-093-916-75-44 (viber)</a>
      </span>
      <span>
        {phoneIcon}
        <a href="tel:+380509584113">+38-050-958-41-13</a>
      </span>
      <span>
        {phoneIcon}
        <a href="tel:+380681627732">+38-068-162-77-32</a>
      </span>
    </>
  );
}
