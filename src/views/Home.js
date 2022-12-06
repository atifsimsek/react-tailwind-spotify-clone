import Section from "Components/Section"

const Home = () => {

  const items = [
    {
      id: 1,
      title: "Daily Mix 1",
      description: "Emir Can İğrek, Derya Uluğ, Gripin ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5a34cfd04da2dd2dc878153d/1/tr/default",
      type:"album"
    },
    {
      id: 2,
      title: "Daily Mix 2",
      description: "Eminem, Lil Wayne, Logic ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/2/tr/default",
      type:"album"
    },
    {
      id: 3,
      title: "Daily Mix 3",
      description: "Metallica, Ghost, Pink Floyd ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb69ca98dd3083f1082d740e44/3/tr/default",
      type:"artist"
    },
    {
      id: 4,
      title: "Daily Mix 4",
      description: "Imagine Dragons, Coldplay, The Score ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb920dc1f617550de8388f368e/4/tr/default",
      type:"podcast"
    },
    {
      id: 5,
      title: "Daily Mix 5",
      description: "Sagopa Kajmer, Norm Ender, Patron ve daha fazlası",
      image: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6eb76d24f4d5055fbf2642c3/5/tr/default",
      type:"album"
    },

  ]

  return (
    <div>
      <Section
        title="Recently played"
        more="/123"
        items={items}
      >

      </Section >
    </div>
  )
}

export default Home