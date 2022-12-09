
function WideCategory({ category }) {
    return (

        <div style={{ "--color": category.color }}
            className="bg-[var(--color)] w-[27.375rem] h-[13.75rem] flex-shrink-0 relative rounded lg overflow-hidden"
        >
            <div className="absolute inset-0">
                <h3 className="p-4 text-[2.5rem] tracking-tighter font-semibold">
                    {category.title}
                </h3>
                <img src={category.cover} className="w-32 h-32 shadow-spotify rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="" />
            </div>
        </div >
    )
}

export default WideCategory