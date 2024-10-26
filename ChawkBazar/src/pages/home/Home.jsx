import "./Home.css";
import { Card, Carousel, Modal } from "antd";
import Header from "../../component/header/Header";
import { flashContext } from "../../component/contextApi/flashApi/Flash";
import { useContext, useState } from "react";
import Meta from "antd/es/card/Meta";
import ModalCom from "../../utils/modal/ModalCom";

function Home() {
  const [open, setOpen] = useState(false);
  const [findId, setfindId] = useState("");
  const { FlashData } = useContext(flashContext);
  console.log(FlashData);
  
  const findData = FlashData.find((item) => {
    return item?.id === findId;
  });

  const contentStyle = {
    color: "#fff",
    textAlign: "center",
    height: "100vh",
    lineHeight: "100vh",
    fontSize: "24px",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Header />
      <Carousel afterChange={onChange} className="main-carousel">
        <div className="slide slide-1">
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide slide-2">
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide slide-3">
          <h3 style={contentStyle}></h3>
        </div>
        <div className="slide slide-4">
          <h3 style={contentStyle}></h3>
        </div>
      </Carousel>
      <div className="card-main-div">
        <div className="card-wrapper">
          <h1>Flash sale</h1>
          <div className="main-card-wrapper">
            {FlashData.map((item, index) => {
              const { title, description, id, image , price} = item;
              return (
                <Card
                  onClick={() => (setfindId(id), setOpen(true))}
                  key={id}
                  hoverable
                  style={{
                    width: 240,
                    margin: 10,
                  }}
                  cover={<img className="card-img" alt="example" src={image} />}
                >
                  <Meta
                    title={title}
                    description={description.slice(0, 20) + "..."}
                  />
                 <p>{`$${price}`}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        title={findData?.title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={null}
      >
        <p>{findData?.description}</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
}

export default Home;
