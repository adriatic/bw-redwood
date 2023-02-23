import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor
        posuere ac ut. Facilisis mauris sit amet massa vitae tortor. Lacus sed
        viverra tellus in hac. In nibh mauris cursus mattis molestie a. Enim eu
        turpis egestas pretium. Urna cursus eget nunc scelerisque viverra.
        Gravida neque convallis a cras semper. Odio ut enim blandit volutpat.
        Tellus pellentesque eu tincidunt tortor. Commodo ullamcorper a lacus
        vestibulum sed arcu. Sed egestas egestas fringilla phasellus.
      </p>
      <Link to={routes.home()}>Return home</Link>
    </>
  )
}

export default AboutPage
