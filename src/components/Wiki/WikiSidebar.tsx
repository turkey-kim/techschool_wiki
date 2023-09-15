import React from "react";
import "../../styles/Wiki.css";
import {Link} from "react-router-dom";

function WikiSidebar() {
  return (
    <div className="WikiSidebar">
      <span className="WikiCategory">Tech Life</span>
      <div className="CategoryListWrapper">
        <Link to="/wiki/커리큘럼">커리큘럼</Link>
        <Link to="/wiki/교육생소개<">교육생 소개</Link>
        <Link to="/wiki/스터디구성">스터디 구성</Link>
      </div>
      <span className="WikiCategory">프로젝트</span>
      <div className="CategoryListWrapper">
        <Link to="/wiki/진행중인프로젝트">진행 중인 프로젝트</Link>
        <Link to="/wiki/완료된프로젝트">완료된 프로젝트</Link>
      </div>
      <span className="WikiCategory">정책</span>
      <div className="CategoryListWrapper">
        <Link to="/wiki/휴가정책">휴가정책</Link>
        <Link to="/wiki/복리후생">복리후생</Link>
      </div>
    </div>
  );
}

export default WikiSidebar;