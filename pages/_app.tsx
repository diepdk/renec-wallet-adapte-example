import { Provider as WalletProvider } from "@renec-foundation/wallet-adapter-react";
import "@renec-foundation/wallet-adapter-react/src/style.css";

const App = ({ pageProps, Component }: any) => {
  return (
    <WalletProvider isMainnet={true} e2eWalletPrivKey={""}>
      <Component {...pageProps} />
    </WalletProvider>
  )
}

export default App
