import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserBalanceCell from 'src/components/UserBalanceCell'

const BalancePage = () => {
  return (
    <>
      <MetaTags title="Balance" description="Balance page" />

      <header>
        <h1>
          <Link to={routes.home()}>Keyp Interview Project</Link>
        </h1>
        <nav>
          <ul>
            <li className="inline">
              <Link to={routes.balance()}>Balance</Link>
            </li>
            <li className="inline">
              <Link to={routes.home()}>Return Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>User Balance</h2>
        <UserBalanceCell />
      </main>
    </>
  )
}

export default BalancePage
