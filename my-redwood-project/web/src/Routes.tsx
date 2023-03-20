// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Amounts" titleTo="amounts" buttonLabel="New Amount" buttonTo="newAmount">
        <Route path="/amounts/new" page={AmountNewAmountPage} name="newAmount" />
        <Route path="/amounts/{id:Int}/edit" page={AmountEditAmountPage} name="editAmount" />
        <Route path="/amounts/{id:Int}" page={AmountAmountPage} name="amount" />
        <Route path="/amounts" page={AmountAmountsPage} name="amounts" />
      </Set>
      <Route path="/balance" page={BalancePage} name="balance" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
