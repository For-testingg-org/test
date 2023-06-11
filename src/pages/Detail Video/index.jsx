import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { videoList } from "../../config/datavideo";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import VideoSide from "../../components/VideoSide";
import Navbar from '../../components/Navbar/Navbar';
import "./styles.css";

library.add(faShareAlt);

function Video() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    let video = videoList.find((video) => video.id === parseInt(id));
    if (video) {
      setVideo(video);
    }
  }, [id]);

  const handleShare = () => {
    const url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          // Tampilkan notifikasi atau popup bahwa link berhasil disalin
          alert("Link telah disalin!");
        })
        .catch((error) => {
          // Tampilkan pesan error jika gagal menyalin link
          console.error("Gagal menyalin link:", error);
        });
    } else {
      // Fallback jika browser tidak mendukung navigator.clipboard atau tidak berjalan dalam secure context
      // Biasanya menampilkan teks dan menginstruksikan pengguna untuk menyalin link secara manual
      alert("Salin link secara manual: " + url);
    }
  };

  return (
    <div id="video-section">
      <Link className="video-goBack" to="/">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      
      {video ? (
        <div className="video-wrap">
          <header>
            <h1>{video.title}</h1>
            <div className="video-subCategory">
              {video.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>

          <iframe
            className="video-cover"
            width="100%"
            height="auto"
            src={video.cover}
            frameBorder="0"
            allowFullScreen
          ></iframe>

          <p className="video-date">Published {video.createdAt}</p>

          <div className="video-profshare">
            <div className="video-author">
              <img src={video.authorAvatar} alt="avatar" />
              <h6>{video.authorName}</h6>
            </div>
            <div className="video-btnshare">
              <FontAwesomeIcon
                icon={faShareAlt}
                size="3x"
                onClick={handleShare}
              />
            </div>
          </div>

          <p className="video-desc">{video.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}

      {/* Recommended Videos
      <div className="video-sidebar">
        <h2>Recommended Videos</h2>
        Tampilkan video-video rekomendasi di sini
        {videoList
          .filter((v) => v.id !== parseInt(id)) // Hapus video saat ini dari daftar rekomendasi
          .map((video) => (
            <VideoSide key={video.id} video={video} />
          ))}
      </div> */}
    </div>
  );
}

export default Video;
