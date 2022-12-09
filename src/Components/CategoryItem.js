function Category({ category }) {
    return (
  
      <div style={{ "--color": category.color }}
        className="bg-[var(--color)] rounded md before:pt-[100%] before:block relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <h3 className="p-4 text-2xl tracking-tighter font-semibold">
            {category.title}
          </h3>
          <img src={category.cover} className="w-[6.25rem] h-[6.25rem] shadow-spotify rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="" />
        </div>
      </div >
    )
  }
export default Category  