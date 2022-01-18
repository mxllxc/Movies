import { useState } from "react";
import { Button } from "./Button";

export function SideBar(props: { setSelectedGenreId: (arg0: number) => void; genres: any[]; selectedGenreId: any; }) {



  

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }

  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={props.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}