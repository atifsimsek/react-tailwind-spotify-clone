import Title from "Components/Title"
import categories from "data/categories"
import favoriteCategories from "data/favoriteCategories"
import { useRef, useEffect, useState } from "react"
import { Icon } from "Icons"
import WideCategory from "Components/WideCategoryItem"
import Category from "Components/CategoryItem"

import ScrollContainer from 'react-indiana-drag-scroll'



const Search = () => {

  const favoritesRef = useRef()
  const [prev, SetPrev] = useState(false);
  const [next, SetNext] = useState(false);

  useEffect(() => {
    if (favoritesRef.current) {

      const scrollHandle = () => {
        const isEnd = Math.round(favoritesRef.current.scrollLeft) + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth
        const isBegin = favoritesRef.current.scrollLeft === 0;
        SetPrev(!isBegin)
        SetNext(!isEnd)


      }

      scrollHandle()

      favoritesRef.current.addEventListener("scroll", scrollHandle)

      return () => {
        favoritesRef?.current?.removeEventListener("scroll", scrollHandle)
      }
    }

  }, [favoritesRef])

  const slideFavoritesNex = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth + 200

  }

  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth + 200

  }


  return (
    <>

      <section className="mb-4">
        <Title title={"En çok dinlediğin türler "} />
        <div className="relative">
          {prev && <button className="w-12 h-12 hover:scale-[1.06] rounded-full -left-6 bg-white text-black flex items-center justify-center absolute  z-10 top-1/2 -translate-y-1/2" onClick={slideFavoritesPrev}><Icon name="prev" size={24} /></button>}
          {next && <button className="w-12 h-12 hover:scale-[1.06] rounded-full -right-6 bg-white text-black flex items-center justify-center absolute  z-10 top-1/2 -translate-y-1/2" onClick={slideFavoritesNex}  ><Icon name="next" size={24} /></button>}

          <ScrollContainer
            innerRef={favoritesRef}
            className="flex !cursor-default overflow-x-auto gap-x-6 scrollable" >
            {favoriteCategories.map((category, index) => (
              <WideCategory key={index} category={category} />
            ))}
          </ScrollContainer>
        </div>
      </section>
      <section>
        <Title title={"Hepsine göz at"} />
        <div className="grid grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Search