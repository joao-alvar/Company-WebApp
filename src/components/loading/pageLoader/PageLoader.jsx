import {LoaderContainer} from './PageLoaderElements'

const PageLoader = () => {
  return (
    <>
      <LoaderContainer>
        <div className="loading"></div>
        <div className="loading-text">loading</div>
      </LoaderContainer>
    </>
  )
}

export default PageLoader
