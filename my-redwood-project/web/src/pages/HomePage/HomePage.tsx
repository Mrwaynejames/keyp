import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import UserBalanceCell from 'src/components/UserBalanceCell'
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <header>
        <h1>Keyp Interview Project</h1>
        <p>Welcome to my Redwood program</p>
        <nav>
          <ul>
            <li>
              <Link to={routes.balance()}>Balance</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <UserBalanceCell />
      </main>
    </>
  )
}

export default HomePage
