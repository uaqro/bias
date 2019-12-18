import React, { Component, memo, useState } from "react";
import { Link } from "react-router-dom";
import Tree from "./Tree";
import { MyContext } from "../context";

function Privacy(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <>
          <h1>Privacy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
            massa vitae purus luctus maximus quis id nibh. In hac habitasse
            platea dictumst. Nunc quis massa euismod, lacinia dui vitae, lacinia
            magna. Suspendisse tempus pretium ligula. Integer orci nunc,
            accumsan sed nisl a, lobortis volutpat eros. Duis sagittis malesuada
            erat sit amet fermentum. Etiam iaculis arcu vitae orci luctus, vitae
            porttitor mauris semper. Etiam ullamcorper euismod purus, non
            euismod dolor faucibus nec. Vivamus porttitor hendrerit efficitur.
            Fusce consectetur eleifend est, ut sollicitudin justo. Nam cursus,
            urna feugiat commodo pharetra, erat quam semper mi, a suscipit velit
            nunc sit amet tellus. Ut at sem in tellus accumsan semper. Etiam
            mollis nisl sed orci pellentesque, nec imperdiet metus pulvinar.
            Mauris eget faucibus risus, non tristique lacus. Cras convallis
            pharetra quam. Etiam mauris nibh, volutpat efficitur leo sit amet,
            sagittis mollis sapien. Etiam fermentum, nisl rutrum vehicula
            fermentum, lacus nibh facilisis erat, non pretium nulla sem at
            justo. Curabitur bibendum nec libero sed imperdiet. Fusce tristique
            viverra velit, ut sagittis metus facilisis at. Nam condimentum
            turpis quis turpis elementum condimentum vitae in turpis. Aenean dui
            erat, tempus vel ultrices vitae, porttitor sit amet velit. Cras
            vitae semper risus. Maecenas tincidunt massa non diam gravida
            cursus. Nullam pellentesque massa at tincidunt feugiat. Pellentesque
            porta quam mauris, cursus tempor quam ultrices vitae. Duis vel
            euismod sapien. Fusce finibus ut enim et sagittis. Sed cursus, ante
            nec placerat volutpat, magna augue ullamcorper sem, at efficitur
            metus nisl in libero. Etiam sagittis libero dolor, quis semper nisl
            tempor vitae. Integer dictum at magna et feugiat. Vivamus eu
            bibendum orci, at consequat ligula. Proin turpis massa, rutrum vitae
            tincidunt vel, cursus quis nisi. Donec bibendum dolor ut justo
            sollicitudin rhoncus. Suspendisse suscipit odio nec mollis interdum.
            Nullam sed porttitor lorem. Nullam tincidunt libero sit amet purus
            ullamcorper sollicitudin. Sed pretium ullamcorper mauris, ac mollis
            lectus. Duis accumsan est velit. Suspendisse nunc massa, dignissim
            vitae ullamcorper fermentum, molestie vitae nisl. Aliquam eget dui
            nec est consequat consectetur a ac dui. Nulla volutpat odio nulla,
            eget semper lacus luctus nec. Donec pulvinar odio eget diam blandit
            pharetra vel ut velit. Duis ac suscipit est. Aenean gravida odio
            erat. Nulla fermentum nisi arcu, gravida cursus nisi sodales eu.
            Curabitur id scelerisque magna. Sed hendrerit ipsum non nibh tempus,
            vel rhoncus massa auctor. Suspendisse potenti. Donec volutpat, neque
            quis hendrerit lacinia, urna dolor pellentesque justo, ac
            condimentum augue nisi ut nunc. Proin accumsan sollicitudin tellus
            ac fringilla. Sed hendrerit turpis sit amet tortor feugiat, nec
            ultrices ipsum cursus. Suspendisse commodo risus orci. Proin enim
            odio, iaculis sed quam ac, pulvinar tempor massa. Sed consequat
            hendrerit ipsum, a malesuada orci vestibulum vel. Nullam non ipsum
            in odio mollis tempus. Sed id ante cursus, pharetra metus eget,
            luctus ex. Fusce dignissim, orci ac commodo posuere, mi nulla
            hendrerit tellus, in faucibus diam massa nec arcu. Sed gravida
            lacinia viverra. Nullam ultricies venenatis turpis, nec tempus
            lectus ornare at. Vestibulum quis nulla ante. Nunc bibendum magna
            vel justo rhoncus porttitor. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Aenean et
            accumsan elit. Nulla scelerisque posuere tellus eget semper. Nunc
            nec lacus egestas, rhoncus nulla ac, rutrum purus. Integer ornare
            nibh in diam posuere gravida. Cras gravida ex libero, a sodales nisl
            consectetur ac. Praesent et suscipit enim. Aliquam facilisis, metus
            ut mollis convallis, mi leo commodo neque, et lacinia nisi dui vitae
            magna. Mauris felis dui, consequat vitae suscipit varius, feugiat in
            arcu. In rhoncus suscipit diam, sit amet mollis ligula. Suspendisse
            rutrum, quam ut semper bibendum, libero dolor vehicula risus, a
            volutpat ipsum risus et neque. Ut sem tellus, gravida ac dictum sed,
            fermentum sed sapien. Nullam ac nibh at velit fringilla rhoncus. Sed
            eleifend orci eget sem congue porta. Proin mauris elit, posuere nec
            aliquet sit amet, feugiat a sapien. Nullam mauris mauris, aliquam
            tempor facilisis scelerisque, luctus tincidunt nulla. Nulla sodales,
            odio efficitur ullamcorper tristique, urna odio rhoncus dolor, vitae
            congue mauris tellus in urna. Integer imperdiet dictum nisl.
            Vestibulum tempus felis id tempus tempus. Praesent rutrum, risus
            vitae consectetur malesuada, nisl quam varius nisl, sed efficitur
            dolor felis sed eros. Vestibulum congue volutpat lectus. Mauris
            nulla lacus, vestibulum consectetur ligula nec, varius rhoncus nisi.
            Sed finibus sapien sit amet tempus malesuada. Duis a orci justo.
            Fusce vel nulla vitae neque viverra dignissim eget eget nibh. Mauris
            sed lectus a massa bibendum gravida sed nec mi. Nulla facilisi. Nunc
            pulvinar dapibus est. Quisque convallis mauris a lacus sodales
            posuere. Aenean maximus semper purus aliquam dictum. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum quis malesuada tellus, in sodales quam. Curabitur
            pellentesque, lacus et scelerisque varius, enim augue imperdiet mi,
            quis accumsan metus augue congue dolor. Nam augue nunc, efficitur in
            tristique at, elementum quis nisl. Cras vitae nulla libero. Sed
            scelerisque ultrices nisl et finibus. Ut ac sodales turpis, non
            scelerisque tortor. Nullam nunc turpis, dignissim vel mollis ac,
            faucibus nec eros. Praesent vehicula arcu eget felis vulputate
            ullamcorper. Morbi vel turpis eget tortor efficitur euismod
            sollicitudin eu nisl. Mauris at quam hendrerit, faucibus nulla eget,
            feugiat erat. Donec euismod velit eget mauris euismod, eget
            imperdiet risus pretium. Donec urna magna, ullamcorper et
            pellentesque id, tristique id lacus. Suspendisse ac est ultrices,
            lacinia eros vel, consectetur enim. Curabitur sit amet ultrices
            ligula. Mauris quis diam tortor. Nam gravida nisi ut erat viverra
            ultrices. Nullam vitae dictum ante, vitae rhoncus odio. Aliquam
            hendrerit dictum dolor, eu imperdiet ipsum laoreet eget. Curabitur a
            elit imperdiet, rutrum velit a, elementum nibh. Vestibulum dapibus,
            metus vel ornare ornare, velit diam mattis orci, non pellentesque
            ante ligula ut erat. Nulla semper erat nisl, vitae venenatis magna
            pulvinar et. Aliquam erat volutpat. Pellentesque sed eros velit. Nam
            rutrum nisi mattis urna malesuada efficitur. Quisque non ante nec
            ipsum gravida aliquet. Nulla venenatis eu erat nec sagittis. Fusce a
            commodo nibh. Quisque rutrum euismod arcu vitae auctor. Curabitur
            pretium, diam eget consequat rutrum, nisi est cursus tellus, id
            pulvinar magna dui id ante. Vivamus id mauris at mauris hendrerit
            ultricies. In cursus arcu vitae libero dignissim porta. Morbi quis
            nisi ornare, viverra urna vitae, ultricies nunc. Nulla mattis metus
            eu porta aliquet. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Phasellus ac mollis mi. Nunc eleifend id sapien ut
            elementum. Donec nec tellus a dui ullamcorper viverra vel in mi. Sed
            elementum tincidunt tortor quis sagittis. Mauris at elit venenatis,
            porta dui in, semper nisi. Sed dui tortor, gravida vitae massa
            condimentum, ornare ultrices lorem. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Integer eget
            placerat ipsum, quis convallis eros. Fusce at velit non dolor
            dignissim gravida eu vel quam. Sed dignissim dictum nisi, et dapibus
            ante auctor et. Aliquam pharetra nisl eu lorem dapibus sodales non
            quis est. Duis eleifend suscipit augue non facilisis. Praesent
            ultrices felis id erat molestie, et pulvinar quam scelerisque. In in
            turpis consectetur, luctus lorem nec, porttitor nisi. Nullam
            venenatis tempus interdum. Curabitur sed nibh gravida, pretium lorem
            eu, dapibus nulla. Praesent sodales quam lorem, vel viverra elit
            convallis at. Sed tincidunt tincidunt nisl, feugiat commodo urna
            varius a. Nulla laoreet nulla sed justo tempor, vitae luctus ex
            porta. Mauris maximus sem a accumsan efficitur. Donec in faucibus
            sapien, et suscipit felis. Curabitur felis diam, suscipit sed
            ultricies ac, imperdiet sit amet nisi. Duis vel dolor semper,
            porttitor massa eget, interdum diam. Praesent consectetur mauris
            vitae enim tempus, eget varius lacus egestas. Mauris fringilla risus
            dui, vel venenatis diam interdum id. Cras condimentum nec sapien sit
            amet laoreet. Sed tincidunt eget lectus eu interdum. Etiam cursus
            consequat eros. Pellentesque pulvinar condimentum nunc, ut fringilla
            lectus placerat ac. Quisque sem lorem, varius ut interdum nec,
            iaculis a risus. Sed est ligula, placerat ut tempus id, elementum
            eget sem. Ut auctor mattis vehicula. Vivamus convallis vehicula
            odio, ut tristique sapien. Curabitur sodales justo ac odio semper
            porta. Ut suscipit, nisl vel placerat viverra, purus turpis ultrices
            dui, quis consequat nibh arcu nec ex. Aenean non elit id turpis
            mattis aliquam. In auctor dui ac dictum suscipit.
          </p>
          <Link to="/feed">Feed</Link>
        </>
      )}
    </MyContext.Consumer>
  );
}
export default Privacy;
