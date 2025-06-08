function ImgVid({image}){
    return(
      <div className={"images"} style={{backgroundImage:`url(${image})`}}>
        <div>
          <a href="#"><i class="fa-solid fa-circle-play"></i></a>
        </div>
      </div>
    )
  }

  export default ImgVid