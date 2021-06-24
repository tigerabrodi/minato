import * as React from 'react'
import { tw } from 'twind'
import { css } from 'twind/css'
import { ReactComponent as SearchSVG } from 'assets/search.svg'
import { useHistory } from 'react-router-dom'

const containerStyles = css`
  height: calc(100vh - 8rem);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Home = () => {
  const history = useHistory()
  const [food, setFood] = React.useState('')
  const [city, setCity] = React.useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    history.push(`/burgers?food=${food}&city=${city}`)
  }

  return (
    <main className={tw(containerStyles)}>
      <h1 className={tw`text-7xl font-bold tablet:(text-9xl) pt-4`}>Minato</h1>
      <form
        className={tw`h-2/3 w-full flex flex-col items-center justify-evenly tablet:(h-1/2)`}
        onSubmit={handleSubmit}
      >
        <div
          className={tw`h-8 w-72 bg-current rounded-sm flex flex-row items-center justify-evenly tablet:(h-10 w-96)`}
        >
          <label
            htmlFor="food"
            className={tw`text(gray-100) tablet:(text-lg) font-bold w-2/12 pl-3`}
          >
            Find
          </label>
          <input
            type="text"
            id="food"
            value={food}
            onChange={(event) => setFood(event.target.value)}
            placeholder="Burger, Cheesecake, Pizza..."
            className={tw`text(sm gray-100) tablet:(text-base) focus:outline-none bg-transparent placeholder-opacity-50 w-10/12 h-full pl-5`}
          />
        </div>
        <div
          className={tw`h-8 w-72 bg-current rounded-sm flex flex-row items-center justify-evenly tablet:(h-10 w-96)`}
        >
          <label
            htmlFor="city"
            className={tw`text(gray-100) tablet:(text-lg) font-bold w-2/12 pl-3`}
          >
            Where
          </label>
          <input
            type="text"
            id="city"
            placeholder="Berlin, New York, Tokyo..."
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className={tw`text(sm gray-100) tablet:(text-base) focus:outline-none bg-transparent placeholder-opacity-50 w-10/12 h-full pl-5`}
          />
        </div>
        <button
          type="submit"
          className={tw`h-8 w-16 bg-red-600 focus:outline-none rounded-sm flex flex-row items-center justify-evenly tablet:(w-24 h-10)`}
          aria-label="search"
        >
          <SearchSVG aria-hidden="true" className={tw`h-4/6`} />
        </button>
      </form>
    </main>
  )
}
