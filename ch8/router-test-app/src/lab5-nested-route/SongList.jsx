import React from 'react'
import { Link, Outlet, useMatch } from 'react-router-dom'

const SongList = (props) => {

  //useMatch() - 매개변수에 path 패턴을 지정하고 이 패턴에 만족해서 실행된 것인지를 
  //판단.. 만족하면 path 정보를 넘겨준다..
  //주로는 outer component 가 inner component 가 실행될 패턴인지를 파악해서..
  //구체적인 정보를 뽑아서.. 다양한 ui 적 처리할 때 이용
  ///songs
  ///songs/1
  const pathMatch = useMatch('/songs/:id')
  let param_id = -1
  if(pathMatch) {
    //outlet 에 특정 컴포넌트가 같이 나오는 순간..
    param_id = parseInt(pathMatch.params.id, 10)//10진수..
  }


  let list = props.songs.map((song) => {
    let cn = 'list-group-item'
    cn += param_id === song.id ? ' list-group-item-secondary' : ""
    return (
      <li className={cn} key={song.id}>
        <Link to={`/songs/${song.id}`} style={{textDecoration: 'none'}}>
          {song.title} ({song.musician})
          <span className='float-end badge bg-secondary'>
            <i className='fa fa-play'></i>
          </span>
        </Link>
      </li>
    )
  })

  return (
    <div className='card card-body'>
      <h2>SongList</h2>
      <ul className='list-group'>{list}</ul>
      {/* 중첩 라우팅에 의해 결정된 컴포넌트가 나올 자리를 지정..  */}
      <Outlet />
    </div>
  )
}

export default SongList