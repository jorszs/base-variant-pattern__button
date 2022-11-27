import './ButtonBase.css';

export default function ButtonBase(props) {
  const {
    className,
    size = 'base',
    as = 'button', // let Ana render it as a button or an anchor.
    children,
    IconStart, // use to render an icon before children
    IconEnd, // use to render an icon after children
    ...restProps
  } = props;

  const Element = as;

  return (
    <Element
      {...restProps}
      // use size, className prop to generate className for this element
      className={`${className}`}
    >
      <span>{IconStart}</span>
      {children}
      <span>{IconEnd}</span>
    </Element>
  );
}
