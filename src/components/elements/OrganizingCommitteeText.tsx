import Image from "next/image";
import React, { useRef, useState } from "react";
import img from "../../../images/Group 96.png";

const OrganizingCommitteeText: React.FunctionComponent = () => {
  const [expandedView, setExpandedView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const onReadLessClick = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-screen p-8 text-center font-lato" ref={ref}>
      {expandedView ? (
        <div className="flex w-full flex-col">
          {/* <p className="mt-4 text-[#0E204E]">
            Welcome To CSI West Bengal Branch It is well known now that the
            Cardiological Society of India was conceived in a dramatic fashion
            during a train ride in 1946 and revealed itself as the first
            Cardiological body in India on 4th April 1948 in Calcutta, one year
            before the formation of the American College of Cardiology, with
            none other than Dr. Bidhan Chandra Roy at the helm of the affairs.
            The glorious history is nicely depicted in the official web site of
            the Cardiological Society of India (www.csi.org.in) and is a must
            read for all cardiologists. Over next few decades, one by one,
            various state branches and city branches were born under the
            constitutional guidance of the central CSI. They act autonomously
            with their own constitutions but like in a federal system are
            reportable to the mother organization. The central CSI evolved
            through various phases, eventually having separate annual conference
            from the API and then the cardiothoracic surgeons made their own
            society. The membership kept on steadily increasing, the activities
            proliferated by leaps and bounds, and the international presence
            became more and more conspicuous. Then in the year 1996 with great
            efforts of Dr. Asoke Kumar Chaudhuri, Dr. S.C.Kundu, Dr. Manatosh
            Panja and other members of the branch the CSI moved to its present
            three storey building. Installation of a state of the art elevator
            is the latest feature and there is plan to expand the building in
            near future. Sometime during this colorful journey of the central
            CSI, the West Bengal Branch was born. Though the facts surrounding
            the birth of the CSI-West Bengal Branch are somewhat obscure, the
            history is not lost. Time tells its own story. Let us look back to
            whatever little the past has to tell us about our branch. When Dr.
            D.P.Basu was the President of the national CSI in 1966, the annual
            conference took place at PG Hospital, Calcutta, with Dr. Asoke Kumar
            Chaudhuri and Dr. Saibal Gupta as the organizing secretaries. A
            surplus amount of forty thousand rupees was generated from the
            conference. It was a dilemma, at that time regarding how to keep the
            money and in which account as by constitution the local branch
            should get the money but there was no local branch! So the thinking
            of starting a local branch began in the mind of the senior
            cardiologists of Calcutta. But as all other functioning was going on
            smoothly under the central CSI, there was no pressing need to
            initiate a new branch. Then, in 1972, while coming back from the
            Madras Conference, the important members from Calcutta seriously
            thought of starting the West Bengal branch of the CSI.
            Dr.J.C.Banerjea was entrusted to convene a meeting to execute the
            same. The meeting was convened in the Sisu Nivas Morning Room at PG
            Hospital where Dr.D.P.Basu Dr.Nilmoni De and Dr.J.C.Banerjea were
            present among others. And the West Bengal Branch of CSI was born.
            The account was open. But the official structure was not formed.
            Then in 1977, Dr.J.C.Banerjea formally became the 1st President and
            Dr. Asoke Kumar Chaudhuri, the 1st Secretary. There was no formal
            voting at that time and this most able duo took the branch through
            the initial unstable years with their natural efficiency and
            organizational skill. The Society has its own building now which has
            been constructed by the members of the Cardiological Society of
            India, West Bengal Chapter with their own contribution. Here free of
            cost cardiological consultation is given twice a week by respected
            members of the Society. During 1987-88, while Dr. Asoke Kumar
            Chaudhuri was the President and Dr. Sanjib Mukheijee was the
            Secretary, the Constitution of the CSI West Bengal Branch was
            written. It was reprinted in 2005-06 with Dr.G.C.Das as the
            President and Dr.M.K.Das as the Secretary and amended and reprinted
            in 2013-14 with Dr.Kajal Ganguly as the President and Dr. Saumitra
            Ray as the Secretary. From early nineties annual conference of the
            branch took place regularly. Two prestigious memorial orations
            increased the attraction of the conference, - Sushila Bala Kundu
            Memorial Oration started in the year 2000 by Dr.S.C.Kundu in the
            memory of his mother and Juthika Majumdar Memorial Oration started
            in the year 2002 by Dr. 12.52Maiumdar in the memory of his wife. The
            branch was formally registered with the West Bengal Societies Act on
            23 May, 2001. Since 2009, there started the annual conference of the
            interventional cardiology. In 2011 this conference spread its wings
            and was named as the Eastern India Interventional Cardiology
            Conclave (EIICCON). West Bengal could not host the annual conference
            of the central CSI for three decades after 1965-66. The jinx was
            broken in 1997 with Dr. Anjan Lal Datta as the Organizing Secretary
            of 1997 conference which took place in Calcutta. The branch then
            hosted the annual national conferences with great success in 2003
            with Dr. A.K.ICar as the Organising Secretary and in 2010 with Dr.
            P.K.Deb as the Organizing Secretary. These events greatly glorified
            the West Bengal Branch at the national and international levels. The
            branch also boasts to host the midterm NIC conference in 2008 when
            Dr. Amal Kumar Banerjee was the President of the West Bengal Branch
            with Dr. Suvanan Ray as the Organizing Secretary and then in 2013
            with Dr. Santanu Guha as the Organizing Secretary. Both the
            occasions broke the contemporary standards and attained newer
            heights. Twice in its history, the West Bengal Branch was
            adjudicated to be the best branch and received the Best Branch
            Award, once in 2005-06 when Dr G.C. Das was the President and Dr.
            M.K.Das was the Secretary and then in 2013-14 when Dr. Kajal Ganguly
            was the President and Dr. Saumitra Ray was the Secretary. Now our
            branch is one of the most vibrant and active branches with
            tremendous progress on all fronts like the benevolent fund
            activities (spearheaded by Dr.K.B.Baksi), free health check up
            clinics, heavily subsidized ECG and echocardiography services, brisk
            research work, round the year high quality academic activities,
            active DM/DNB training programs (first time organized by Dr. Arup
            Das Biswas in March, 2014), World Heart Day observations (spear
            headed by Dr. S.C.Kundu), regular updating of the Members Directory
            (the last update was in 2012 when Dr. P.K.Deb was the President and
            Dr. Soumitra Kumar was the Secretary), a well-equipped library with
            online and hard copy access to most prestigious national and
            international cardiology journals and latest text books, regularly
            conducted audit and highly active executive body, duly elected every
            two years. We have our own website: (www.csiwb.org.in).The current
            membership strength is 371. With this glorious legacy bestowed on
            us, let us take a pledge to take our branch to that new height yet
            unknown to ourselves. Long live CSI-West Bengal Branch. From early
            nineties annual conference of the branch took place regularly. Two
            prestigious memorial orations increased the attraction of the
            conference, - Sushila Bala Kundu Memorial Oration started in the
            year 2000 by Dr.S.C.Kundu in the memory of his mother and Juthika
            Majumdar Memorial Oration started in the year 2002 by Dr.
            R.S.Majumdar in the memory of his wife.
          </p> */}
          <p className="mt-4 text-[#0E204E]">
            The CSI-West Bengal Branch (CSI-WB) came into being in 1977 with Dr.
            J.C. Banerjea as the first President. The branch grew in stature
            with time so much so that it contributed the fund that was required
            for construction of CSI-Head Quarters Building, currently located in
            Kankurgachi, Kolkata which also houses CSI-WB Office.
          </p>
          <div className="font-sansita flex h-fit w-full flex-col items-center text-2xl">
            <p className="mt-4 text-[#8A0406]">MAJOR</p>
            <p className="text-[#E06F46]">EVENTS</p>
            <Image alt="" src={img} />
          </div>
        </div>
      ) : (
        <p className="mt-4 text-[#0E204E]">
          The CSI-West Bengal Branch (CSI-WB) came into being in 1977 with Dr.
          J.C. Banerjea as the first President. The branch grew in stature with
          time so much so that it contributed the fund that was required for
          construction of CSI-Head Quarters Building, currently located in
          Kankurgachi, Kolkata which also houses CSI-WB Office.
        </p>
      )}
      {expandedView ? (
        <div className="mt-4">
          <button
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-[#280101]"
            onClick={() => {
              setExpandedView(false);
              onReadLessClick();
            }}
          >
            Read Less
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button
            className="rounded bg-[#560303] px-4 py-2 text-white hover:bg-[#280101]"
            onClick={() => {
              setExpandedView(true);
            }}
          >
            Read More
          </button>
        </div>
      )}
    </div>
  );
};

export default OrganizingCommitteeText;
