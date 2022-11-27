import ButtonBase from './ButtonBase.jsx';

const mapSolidVariant = {
  primary: `text-white bg-blue-500 disabled:bg-blue
    hover:bg-blue-600 active:bg-primary-700
    focus:bg-primary-700 focus:shadow-outline-primary`,
  danger: `text-white bg-red disabled:bg-danger
    hover:bg-red-600 active:bg-danger-700
    focus:bg-red-700 focus:shadow-outline-danger`,
  plain: 'bg-white focus:shadow-outline text-black',
};

export default function ButtonSolid(props) {
  const { variant = 'primary', ...restProps } = props;
  return (
    <ButtonBase
      // all the other props like IconStart will be passed to ButtonBase
      {...restProps}
      // use variant to generate className and pass it to ButtonBase
      className={mapSolidVariant[variant]}
      // className="generated-solid-classnames"
    />
  );
}
