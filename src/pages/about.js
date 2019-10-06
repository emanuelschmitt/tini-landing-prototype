import React from "react";
import ImageModule from "../modules/image-module";
import TextModule from "../modules/text-module";

function About() {
  return (
    <>
      <ImageModule />
      <TextModule columnCount={3} columnGap="2rem">
        <h1>About</h1>
        <p>
          It took tINI only a few years of playing in clubs to become one of
          Germany’s most highly acclaimed female artists in techno and house
          music.
        </p>
        <p>
          Her involvement with rhythms and beats started at the age of 7, when
          tINI, who is originally from Munich, began playing drums, while the
          curiosity and passion for sounds finally led her to first production
          attempts on her brother’s Atari. While her general interest in music
          has been aroused by new romantics, wave and grunge, her first dj
          adventures started with underground hip hop to rap. As her interest,
          knowledge and skills developed, her DJ style became more electronic
          when she stumbled upon Moodymann’s “Amerika”.
        </p>
        <p>
          It was in summer 2003 that tINI started playing frequently in clubs
          and events in and around Munich. First DJ appearances throughout
          Europe and her first own nights and residencies followed soon. In 2008
          tINI joined Desolat and the Artist Alife family, after she caught
          attention of Loco Dice during few performances at the same spots. No
          doubt this was an initial spark. Becoming a constant part of the
          worldwide Desolat nights by that time, her profile assumed shape,
          while more and more clubs became aware of the curly haired talent with
          that powerful, vivid temper, who intuitionally knows how to enchant
          her crowd whether during smart-building warm-up or igniting main-time
          sessions.
        </p>
        <p>Deeply. Impulsively. tINI.</p>
      </TextModule>
    </>
  );
}

export default About;
