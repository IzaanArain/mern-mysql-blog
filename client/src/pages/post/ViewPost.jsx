import { Link } from "react-router-dom";
import deleteIcon from "../../assets/img/delete.png";
import editIcon from "../../assets/img/edit.png";
import Menu from "../../components/menu/Menu";
const ViewPost = () => {
  return (
    <>
      <section className="view-post">
        <article className="content">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <section className="user">
            <img
              src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <section className="info">
              <span>john</span>
              <p>Postesd 2 days ago</p>
            </section>

            <section className="edit">
              <Link to={"/write?edit=2"}>
                <img src={editIcon} alt="" />
              </Link>
              <img src={deleteIcon} alt="" />
            </section>
          </section>

          <h1>Lorem, itaque enim quae reprehenderit earum facilis?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            mollitia, sapiente saepe necessitatibus cumque, odit ullam quod
            officiis commodi eligendi aliquid itaque! Corporis asperiores
            aspernatur quo soluta deserunt doloremque velit.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sunt
            voluptas, aut rerum omnis est dolore, aliquid neque impedit nulla
            ipsum inventore voluptatum nobis? Quia eligendi laboriosam maiores
            eos officiis, voluptatibus vitae doloribus odio ipsa est officia
            reiciendis, quasi totam ut dicta illo! Ab beatae ducimus illum
            velit, doloribus nam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum culpa
            excepturi voluptatibus veritatis rerum eum sed velit quaerat
            cupiditate. Amet optio quasi pariatur repellat vero ipsum non
            similique iusto atque aliquam officiis aliquid doloribus dolorum
            quos laborum, id ut quod eos. Accusamus temporibus, reiciendis nihil
            eligendi optio illum vero animi alias beatae eius non! Totam, velit.
            Eum tempore magnam maiores! Iste temporibus vel atque. Quod sunt
            sequi nihil molestias quae eos accusamus dicta, esse sed distinctio
            corrupti. Itaque amet quaerat porro harum eos laudantium impedit
            temporibus numquam inventore voluptate dolorum ratione cupiditate
            voluptatem, quia voluptatibus soluta ipsa modi ad provident.
          </p>
        </article>
        <Menu />
      </section>
    </>
  );
};

export default ViewPost;
