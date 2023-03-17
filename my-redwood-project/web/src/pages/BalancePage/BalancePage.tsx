import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const BalancePage = () => {
  return (
    <>
      <MetaTags title="Balance" description="Balance page" />

      <header>
        <h1>Balance Page</h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.balance()}>Balance</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Link to={routes.home()}>Return Home</Link>
      </main>
    </>
  )
}

export default BalancePage
