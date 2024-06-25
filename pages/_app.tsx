import { AppProps } from 'next/app'
import GlobalStyle from '@/src/styles'
import Head from 'next/head'
import wrapper from '@/src/store'
import { Provider } from 'react-redux'
import { Modal, Toast } from '@/src/components'
import Script from 'next/script'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import queryCLient from '@/src/store/providers/queryClientProvider'

const LinkBrary = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.1/kakao.min.js"
        integrity="sha384-kDljxUXHaJ9xAb2AzRd59KxjrFjzHa5TAoFQ6GbYTCAG0bjM55XohjjDT7tDDC01"
        crossOrigin="anonymous"
      />
      <Provider store={store}>
        <QueryClientProvider client={queryCLient}>
          <Head>
            <title>Linkbrary</title>
          </Head>
          <GlobalStyle />
          <Modal />
          <Toast />
          <Component {...props.pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default LinkBrary
