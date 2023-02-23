import { Link, routes } from '@redwoodjs/router'

type AggregatorLayoutProps = {
  children?: React.ReactNode
}

const AggregatorLayout = ({ children }: AggregatorLayoutProps) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>Blues Wireless IoT Aggregator</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AggregatorLayout
