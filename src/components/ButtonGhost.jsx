import ButtonBase from './ButtonBase.jsx';

const mapSolidVariant = {
  primary: `text-white border-2 border-blue-500 disabled:bg-blue
    hover:border-blue-600 active:border-primary-700
    focus:border-primary-700 focus:shadow-outline-primary`,
  danger: `text-white border-red-600 disabled:bg-danger
    hover:border-red-600 active:bg-red-700
    focus:border-red-400 focus:shadow-outline-danger`,
  plain: 'border-white focus:shadow-outline text-black',
};

export default function ButtonGhost(props) {
  const { variant = 'danger', ...restProps } = props;
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
