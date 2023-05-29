import {TailSpin} from 'react-loader-spinner'

const ButtonLoader = ({className}) => {
  return (
    <>
      <TailSpin
        height="23"
        width="23"
        color="#ffffff"
        ariaLabel="spin loading"
        role="status loading"
        radius="1"
        wrapperClass={className}
        visible={true}
      />
    </>
  )
}

export default ButtonLoader
