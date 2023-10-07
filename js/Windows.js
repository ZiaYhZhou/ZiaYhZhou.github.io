// "use strict";
//
// var FrostifyModal = new FrostifyModals();
//
// // 定义一个函数来设置和显示模态窗口
// function showModal(event) {
//     // 阻止链接的默认行为
//     event.preventDefault();
//
//     FrostifyModal.set({
//         title: '可拖拽的弹出窗口',
//         content: 'Lorem ipsum dolor sit amet,www.bootstrapmb.com consectetur adipisicing elit. Accusantium ad amet, aut delectus deserunt doloremque eos' +
//             '    eum facere fuga minus mollitia nemo numquam obcaecati, omnis quod saepe sit, voluptate. Nihil!',
//         onok: () => {},
//         oncancel: () => {},
//         isClosable: true,
//         isDraggable: true,
//         reverseButtons: false,
//         labels: {
//             ok: '好的',
//             cancel: '关闭'
//         },
//     }).show();
// }
// document.querySelector('.pbmit-service-title a[href="#showModalBtn"]').addEventListener('click', showModal);

"use strict";

var FrostifyModal = new FrostifyModals();

// 定义一个函数来设置和显示模态窗口
function showModal(event) {
    // 阻止链接的默认行为
    event.preventDefault();

    // 获取点击的超级链接的data-modal-content属性值
    // var modalContent = event.target.getAttribute('data-modal-content');
    const modalContent = event.currentTarget.getAttribute('data-modal-content');
    // 根据data-modal-content的值来决定显示哪种内容
    let title, content;

    switch (modalContent) {
        // 研究方向
        case 'RI_ForestryEng':
            title = 'Forest Engineering Equipment and its Automation';
            content = 'Description: Forest engineering equipment and its automation focus on harnessing advanced technologies and automated systems to make forest management and maintenance more efficient and sustainable. Research in this field aims to develop new machinery and techniques that reduce manual labor, increase production efficiency, while ensuring minimal impact on the environment. Through automation, we can better protect and manage our precious forest resources.';
            break;
        case 'RI_ManMachine':
            title = 'Man-Machine Environment Engineering';
            content = ' Man-machine environment engineering studies the optimal interaction between humans and machines in complex working environments. This involves designing tools and machinery that are ergonomic, ensuring the safety and comfort of the operator while increasing efficiency. In forestry, this means developing machines that can operate under various environmental conditions while ensuring the health and safety of the operator.';
            break;
        case 'RI_Information':
            title = 'Information Monitoring of Forests and their Environment';
            content = 'Information monitoring of forests and their environment focuses on using advanced sensors and data analytics to monitor the health and environmental changes of forests in real-time. This information is crucial for predicting forest fires, disease outbreaks, or other potential threats. Through continuous data collection and analysis, we can gain a deeper understanding of forest ecosystems and devise more effective conservation and management strategies.';
            break;
        case 'RI_Robotics':
            title = 'Forestry Robotics';
            content = 'Forestry robotics concentrates on developing advanced robots capable of operating within forest environments. These robots can perform tasks such as planting, pruning, harvesting, and more, significantly reducing the need for manual labor. As technology advances, these robots become smarter and more adaptive, capable of working independently in various complex forest settings, leading to more efficient and sustainable forest management.';
            break;
        // 团队成员
        case 'Kanjiangming':
            title = 'Kanjiangming';
            content = 'Jiangming Kan is a professor and doctoral supervisor in the discipline of forest engineering. He is mainly engaged in teaching and research in computer vision and machine learning, forest engineering equipment and its automation. He lectures in the courses of Machine Vision and Computer Control System, and guides students to win the National Second Prize of the National Student Electronic Design Competition, etc. He is also a professor in the Department of Forest Engineering. He has presided over or undertaken 15 scientific research projects at provincial and ministerial levels and above; published more than 100 papers in academic journals at home and abroad, of which 55 are included in SCI/EI, and obtained 11 invention patents; and won the Third Prize of Achievements in Higher Forestry (Agricultural) Education and the Third Prize of Liang Xi Science and Technology Prize (ranked third).';
            break;
        case 'dongruifang':
            title = 'dongruifang';
            content = `
        <div class="tutor-introduction">
            <h2>Dr. Ruifang Dong</h2>
            <p><strong>Title：</strong>Associate Professor</p>
            <p><strong>Field of Study：</strong>Forestry Equipment and Informatization</p>
            <p><strong>Phone：</strong>+86-010-62337736</p>
            <p><strong>E-mail：</strong><a href="mailto:ruifang_dong@bjfu.edu.cn">ruifang_dong@bjfu.edu.cn</a></p>
            <h3>Research Interests：</h3>
            <ul>
                <li>Robot Localization and Navigation, Visual SLAM (Simultaneous Localization and Mapping)</li>
                <li>Environmental Perception, 3D Reconstruction</li>
                <li>Artificial Intelligence, Machine Learning</li>
            </ul>
            <p><strong>Mentor Type：</strong>Master's Supervisor</p>
            <h3>Recruitment Directions：</h3>
            <ul>
                <li>Electronic Information (Professional Master)</li>
                <li>Forestry Equipment and Informatization (Academic Master)</li>
            </ul>
            <p>Candidates interested in intelligent robots, computer vision, image processing, and automatic control are welcome to apply. Interested individuals can contact anytime via email.</p>
            <h3>Main Courses Taught：</h3>
            <ul>
                <li>Sensors and Detection Technology</li>
                <li>Embedded Principles and Interface Technology</li>
                <li>Machine Vision</li>
            </ul>
            <h3>Educational Background：</h3>
            <ul>
                <li>2013-2018, PhD: North China Electric Power University, Major: Pattern Recognition and Intelligent Systems</li>
                <li>2015-2016, Joint PhD Program: University of Technology of Compiegne, France, Heudiasyc Laboratory, Major: Intelligent Robots</li>
                <li>2010-2013, Master: North China Electric Power University, Major: Pattern Recognition and Intelligent Systems</li>
                <li>2006-2010, Bachelor: North China Electric Power University, Major: Automation</li>
            </ul>
        </div>`;
            break;
        case 'zhaoxixuan':
            title = 'Dr. Xixuan Zhao';
            content = `
        <div class="tutor-introduction">
            <h2>Ms. Xixuan Zhao</h2>
            <p><strong>Title:</strong> Lecturer</p>
            <p><strong>Field of Study:</strong> Forestry Equipment and Informatization</p>
            <p><strong>Phone:</strong> +86-010-62336398</p>
            <p><strong>E-mail:</strong> <a href="mailto:zhaoxixuan@bjfu.edu.cn">zhaoxixuan@bjfu.edu.cn</a></p>
        
            <h3>Research Interests:</h3>
            <ul>
                <li>Pattern Recognition and Image Processing</li>
                <li>Image Restoration</li>
                <li>Machine Vision</li>
            </ul>
        
            <h3>Main Courses Taught:</h3>
            <ul>
                <li>Electrical and Electronic Technology A</li>
                <li>Integrated Design of Electrical and Electronic Systems</li>
                <li>Basics of Circuits and Electronics</li>
            </ul>
        
            <h3>Educational Background:</h3>
            <ul>
                <li>2015-2020, PhD (Master-PhD Program): Beijing Forestry University, Major: Forest Engineering</li>
                <li>2018-2019, Joint PhD Program: Worcester Polytechnic Institute, Major: Computer Science and Technology</li>
                <li>2011-2015, Bachelor: China Jiliang University, Major: Measurement and Control Technology and Instruments</li>
            </ul>
        
            <h3>Work Experience:</h3>
            <ul>
                <li>2020-Present, School of Engineering, Beijing Forestry University, Lecturer</li>
            </ul>
        
            <h3>Awards:</h3>
            <ul>
                <li>Outstanding Graduate Student Mentor Team, Beijing Forestry University, 2022</li>
            </ul>
        
            <h3>Main Achievements:</h3>
            <p>Currently presiding over a special project funded by the basic scientific research business expenses of central universities. As a major participant, she has been involved in more than four provincial and ministerial-level projects. During this period, she published nine academic papers in domestic and foreign journals, of which five were published as the first author/corresponding author in SCI journals and three in EI journals.</p>
        
            <h3>Publications:</h3>
            <ul>
                <li>Yu Miao, Xixuan Zhao*, Jiangming Kan. "An end-to-end single image dehazing network based on U-net." Signal, Image and Video Processing, 2022, 16(7):1739-1746.</li>
                <li>Jie Zhang, Qiyuan Zhang, Xixuan Zhao*, Jiangming Kan. "Boosting Denoisers with Reinforcement Learning for Image Restoration." Soft computing: A fusion of foundations, methodologies and applications 26-7(2022).</li>
                <li>Danyu Sun, Xixuan Zhao*, Jiangming Kan*. "Performance Evaluation of Color Descriptors Under illumination variation." Journal of Sensors. 2021 (2021).</li>
                <li>Xixuan Zhao, Ziyang Liu, Emmanuel Agu*, Ameya Wagh, Shubham Jain, Clifford Lindsay, Bengisu Tulu, Daine Strong, Jiangming Kan. "Fine-grained diabetic wound depth and granulation tissue amount assessment using bilinear convolutional neural network." IEEE Access 7（2019）,179151-179162.</li>
            </ul>
        </div>`;
            break;
        case 'Zhangjiaming':
            title = 'Jiaming Zhang\'s Profile';
            content = `
            <div class="trans_type"><a href="https://charmingzh.github.io/#About%20me">Jiaming Zhang is Here!!!</a></div>
            `;
            break;
        case 'apply':
            title = 'Entrance Requirements';
            content = `
<div class="modal-content">
  <h1>Admission Requirements for <span>Forestry Equipment and Informatization</span></h1>
  <p>Dear students, thank you for your interest in our research group. We are a <strong>dynamic team</strong> striving for excellence, dedicated to the cutting-edge research in forestry equipment and informatization.</p>
  <h2>Academic Background:</h2>
  <p><strong>Forestry Equipment and Informatization</strong> is a secondary discipline under the primary discipline of Forestry Engineering. Forestry Engineering is a key discipline in Beijing and the National Forestry and Grassland Administration. We have the right to confer master's and doctoral degrees and have a post-doctoral research station. We also have a key laboratory of Forestry Equipment and Automation under the National Forestry and Grassland Administration.</p>
  <h2>Our Specializations:</h2>
  <ul>
    <li><strong>Forestry engineering equipment and its automation</strong></li>
    <li><strong>Man-machine environment and safety</strong></li>
    <li><strong>Forestry environmental perception and informatization</strong></li>
    <li><strong>Forestry robots</strong></li>
  </ul>
  <h2>Our Expectations:</h2>
  <ul>
    <li>You have a <strong>solid computer programming ability</strong> and a deep understanding of deep learning frameworks.</li>
    <li>You are <strong>diligent and eager to learn</strong>, with a strong passion for academic research.</li>
    <li>You can fluently read English literature and <strong>communicate academically</strong> with international peers.</li>
    <li>You have <strong>strong resilience</strong>, are not afraid of challenges, and are willing to face difficulties.</li>
  </ul>
  <p>Our research group mainly focuses on computer vision, forestry machinery automation, and 3D reconstruction. We look forward to the participation of talented individuals to contribute to the development of forestry equipment and informatization. We also welcome <strong>capable undergraduates</strong> to join our group and participate in scientific research.</p>
  <p>If you believe you meet the above requirements and are interested in our research directions, please feel free to contact us. We look forward to having you on board!</p>
</div>`;
            break;
        case 'teamDetail':
            title = 'Team Detail';
            content = `
<div style="font-family: 'Arial', sans-serif; margin: 40px; background-color: #f4f4f4;">
  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">Faculty Team</h2>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <!--    Add faculty members... -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/kanjiangming.jpg" alt="Teacher Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Kan Jiangming</div>
          <div style="font-size: 0.9em; color: #777;">Professor</div>
          <div style="font-size: 0.9em; color: #777;">jmkan@bjfu.edu.cn</div>
        </div>
      </div>

      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/dongruifang.jpg" alt="Teacher Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Dong Ruifang</div>
          <div style="font-size: 0.9em; color: #777;">Associate Professor</div>
          <div style="font-size: 0.9em; color: #777;">ruifang_dong@bjfu.edu.cn</div>
        </div>
      </div>

      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/zhaoxixuan.jpg" alt="Teacher Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Zhao Xixuan</div>
          <div style="font-size: 0.9em; color: #777;">Lecturer</div>
          <div style="font-size: 0.9em; color: #777;">johndoe@bjfu.edu.cn</div>
        </div>
      </div>

      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/yaoshun.jpg" alt="Teacher Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Yao Shun</div>
          <div style="font-size: 0.9em; color: #777;">Lecturer</div>
          <div style="font-size: 0.9em; color: #777;">yaoshun@bjfu.edu.cn</div>
        </div>
      </div>
      <!--    Add more faculty members... -->
    </div>
  </div>


  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">PhD Students</h2>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <!-- Each student div will take up roughly one third of the container width -->
      <!-- Graduate Student - Zhang Jiaming -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/hanjunyun.jpg" alt="hanjunyu Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Han Junyu</div>
          <div style="font-size: 0.9em; color: #777;">hanjunyu@bjfu.edu.cn</div>
        </div>
      </div>
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/hantianyu.jpg" alt="Han Tianyu Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Han Tianyu</div>
          <div style="font-size: 0.9em; color: #777;">hanjunyu@bjfu.edu.cn</div>
        </div>
      </div>
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/zhouyunhe.jpg" alt="Zhou Yunhe Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Zhou Yunhe</div>
          <div style="font-size: 0.9em; color: #777;">zhouyunhe@bjfu.edu.cn</div>
        </div>
      </div>
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/liuyuanhang.jpg" alt="Liu Yuanhang Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Liu Yuanhang</div>
          <div style="font-size: 0.9em; color: #777;">liuyuanhang@bjfu.edu.cn</div>
        </div>
      </div>
      <!-- Add more PhD students... -->
    </div>
  </div>

  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">Graduate Students</h2>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <!-- Each student div will take up roughly one third of the container width -->
      <!-- Graduate Student - Zhang Jiaming -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/zhangjiaming.jpg" alt="Zhang Jiaming Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;"><a href="https://charmingzh.github.io/">Zhang Jiaming</a></div>
          <div style="font-size: 0.9em; color: #777;">jmzhang@bjfu.edu.cn</div>
          <!--                &lt;!&ndash; Personal Homepage Link &ndash;&gt;-->
          <!--                <div><a href="path_to_personal_homepage" target="_blank">Personal Website</a></div>-->
          <!--                &lt;!&ndash; Resume PDF Download Link &ndash;&gt;-->
          <!--                <div><a href="path_to_resume_pdf" download>Download Resume</a></div>-->
        </div>
      </div>
      <!-- Graduate Student - Zhang Pengyu -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/zhangpengyu.jpg" alt="Zhang Pengyu Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Zhang Pengyu</div>
          <div style="font-size: 0.9em; color: #777;">zhangpengyu@bjfu.edu.cn</div>
        </div>
      </div>
      <!-- Graduate Student - Li Yuan -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/liyuan.jpg" alt="Li Yuan Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Li Yuan</div>
          <div style="font-size: 0.9em; color: #777;">liyuan@bjfu.edu.cn</div>
        </div>
      </div>
      <!-- Graduate Student - Sun Zheng -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/sunzheng.jpg" alt="Sun Zheng Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Sun Zheng</div>
          <div style="font-size: 0.9em; color: #777;">sunzheng@bjfu.edu.cn</div>
        </div>
      </div>
      <!-- Graduate Student - Chai Shuyao -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/chaishuyao.jpg" alt="Chai Shuyao Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Chai Shuyao</div>
          <div style="font-size: 0.9em; color: #777;">chaishuyao@bjfu.edu.cn</div>
        </div>
      </div>
      <!-- Graduate Student - Wang Junshuai -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/wangjunshuai.jpg" alt="Wang Junshuai Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Wang Junshuai</div>
          <div style="font-size: 0.9em; color: #777;">wangjunshuai@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Ling Nianci -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/lingnianci.jpg" alt="Ling Nianci Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Ling Nianci</div>
          <div style="font-size: 0.9em; color: #777;">lingnianci@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Jing Xiangyu -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/jingxiangyu.jpg" alt="Jing Xiangyu Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Jing Xiangyu</div>
          <div style="font-size: 0.9em; color: #777;">jingxiangyu@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Wang Kuan -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/wangkuan.jpg" alt="Wang Kuan Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Wang Kuan</div>
          <div style="font-size: 0.9em; color: #777;">wangkuan@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Yang Shuo -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/yangshuo.jpg" alt="Yang Shuo Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Yang Shuo</div>
          <div style="font-size: 0.9em; color: #777;">yangshuo@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Jin Zihui -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/jinzihui.jpg" alt="Jin Zihui Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Jin Zihui</div>
          <div style="font-size: 0.9em; color: #777;">jinzihui@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Cheng Xi -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/chengxi.jpg" alt="Cheng Xi Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Cheng Xi</div>
          <div style="font-size: 0.9em; color: #777;">chengxi@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Wu Yue -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/wuyue.jpg" alt="Wu Yue Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Wu Yue</div>
          <div style="font-size: 0.9em; color: #777;">wuyue@bjfu.edu.cn</div>
        </div>
      </div>


      <!-- Graduate Student - Chen Yulong -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/chenyulong.jpg" alt="Chen Yulong Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Chen Yulong</div>
          <div style="font-size: 0.9em; color: #777;">chenyulong@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Liu Yunchang -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/liuyunchang.jpg" alt="Liu Yunchang Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Liu Yunchang</div>
          <div style="font-size: 0.9em; color: #777;">liuyunchang@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- Graduate Student - Hao Jiawei -->
      <div style="flex: 1 1 calc(33.333% - 20px); margin-bottom: 20px;">
        <img src="../images/creative-studio/team/haojiawei.jpg" alt="Hao Jiawei Image" style="width: 60px; height: 60px; border-radius: 50%; margin-right: 20px;">
        <div>
          <div style="font-weight: bold;">Hao Jiawei</div>
          <div style="font-size: 0.9em; color: #777;">haojiawei@bjfu.edu.cn</div>
        </div>
      </div>

      <!-- ... (Add other students in a similar manner) ... -->

    </div>
  </div>
  <!-- Alumni Section -->
  <div class="section alumni">
    <h2>Alumni</h2>
    <ul>
      <!-- Alumni 1 -->
      <li>
        <span class="name">Pang Shuai</span> -
        <span class="year">2011</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Binzhou University School of Electrical Engineering</span>
      </li>
      <!-- ... (为每位校友重复上述格式) ... -->
      <!-- Alumni 2 -->
      <li>
        <span class="name">Sun Jie</span> -
        <span class="year">2012</span>,
        <span class="degree">Master</span> in
        <span class="major">Mechanical Engineering</span>,
        Currently at <span class="affiliation">Shandong Weihai Huadong CNC Co., Ltd.</span>
      </li>
      <!-- Zhan Chuandong -->
      <li>
        <span class="name">Zhan Chuandong</span> -
        <span class="year">2012</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Jiangxi Province Jushutongxiang Information Technology Co., Ltd.</span>
      </li>

      <!-- Cui Xintong -->
      <li>
        <span class="name">Cui Xintong</span> -
        <span class="year">2012</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">National Intellectual Property Administration, Patent Office, Tianjin Patent Examination Cooperation Center</span>
      </li>
      <!-- Zhan Chuandong -->
      <li>
        <span class="name">Zhan Chuandong</span> -
        <span class="year">2012</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Jiangxi Province Jushutongxiang Information Technology Co., Ltd.</span>
      </li>

      <!-- Cui Xintong -->
      <li>
        <span class="name">Cui Xintong</span> -
        <span class="year">2012</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">National Intellectual Property Administration, Patent Office, Tianjin Patent Examination Cooperation Center</span>
      </li>

      <li>
        <span class="name">Chen Shuxian</span> -
        <span class="year">2013</span>,
        <span class="degree">Master</span> in
        <span class="major">Mechanical Engineering</span>,
        Currently at <span class="affiliation">Changan Automobile Research Institute</span>
      </li>

      <!-- Alumni - Liu Nian -->
      <li>
        <span class="name">Liu Nian</span> -
        <span class="year">2013</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Tsinghua Tongfang Weishi Technology Co., Ltd.</span>
      </li>

      <!-- Alumni - Deng Xiang -->
      <li>
        <span class="name">Deng Xiang</span> -
        <span class="year">2013</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Deputy Township Chief of Zhuye Ping Township, Sangzhi County, Zhangjiajie City, Hunan Province</span>
      </li>

      <li>
        <span class="name">Hao Wenrui</span> -
        <span class="year">2014</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Beijing Jingdiao Technology Group Co., Ltd.</span>
      </li>

      <!-- Alumni - Zhang Xianglong -->
      <li>
        <span class="name">Zhang Xianglong</span> -
        <span class="year">2014</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Public Security Ministry Fire Certification Center</span>
      </li>

      <!-- Alumni - Zhong Chaojie -->
      <li>
        <span class="name">Zhong Chaojie</span> -
        <span class="year">2015</span>,
        <span class="degree">Master</span> in
        <span class="major">Mechanical Engineering</span>,
        Currently at <span class="affiliation">China North Vehicle Research Institute of China Weapon Industry Group</span>
      </li>

      <li>
        <span class="name">Wang Laofei</span> -
        <span class="year">2015</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">Beijing University of Posts and Telecommunications (PhD Candidate)</span>
      </li>

      <!-- Alumni - Wang Zhen -->
      <li>
        <span class="name">Wang Zhen</span> -
        <span class="year">2016</span>,
        <span class="degree">Master</span> in
        <span class="major">Mechanical Engineering</span>,
        Currently at <span class="affiliation">Wuhan University (PhD Candidate)</span>
      </li>

      <!-- Alumni - Han Min -->
      <li>
        <span class="name">Han Min</span> -
        <span class="year">2016</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">China United Network Communications Group Co., Ltd. Beijing Branch</span>
      </li>

      <!-- Alumni - Han Yue -->
      <li>
        <span class="name">Han Yue</span> -
        <span class="year">2016</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Dalian University of Technology pursuing PhD</span>
      </li>

      <!-- Alumni - Li Chunxiao -->
      <li>
        <span class="name">Li Chunxiao</span> -
        <span class="year">2016</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Beijing University of Posts and Telecommunications pursuing PhD</span>
      </li>

      <!-- Alumni - Zeng Zechen -->
      <li>
        <span class="name">Zeng Zechen</span> -
        <span class="year">2016</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Beijing Foton Cummins Engine Co., Ltd.</span>
      </li>

      <!-- Alumni - Yang Rongchao -->
      <li>
        <span class="name">Yang Rongchao</span> -
        <span class="year">2017</span>,
        <span class="degree">PhD</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Hebei University of Geosciences</span>
      </li>

      <!-- Alumni - Ai Yunting -->
      <li>
        <span class="name">Ai Yunting</span> -
        <span class="year">2017</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently <span class="affiliation">Delayed graduation due to health reasons</span>
      </li>

      <!-- Alumni - Sun Danyu -->
      <li>
        <span class="name">Sun Danyu</span> -
        <span class="year">2017</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Samsung Electronics Group (Dongguan), South Korea</span>
      </li>

      <!-- Alumni - Feng Xin -->
      <li>
        <span class="name">Feng Xin</span> -
        <span class="year">2017</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">Harbin Institute of Technology Shenzhen Institute pursuing PhD</span>
      </li>

      <!-- Alumni - Ai Hua -->
      <li>
        <span class="name">Ai Hua</span> -
        <span class="year">2017</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">China Mobile Communications Group Yinchuan Branch</span>
      </li>

      <!-- Alumni - Yang Tao -->
      <li>
        <span class="name">Yang Tao</span> -
        <span class="year">2018</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">Datang Telecom Group (Xi'an)</span>
      </li>


      <!-- Alumni - Liu Long -->
      <li>
        <span class="name">Liu Long</span> -
        <span class="year">2018</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">China North Industries Group Corporation Equipment Research Institute</span>
      </li>

      <!-- Alumni - Tang Mengxia -->
      <li>
        <span class="name">Tang Mengxia</span> -
        <span class="year">2018</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Beijing Pinchi Medical Equipment Co., Ltd.</span>
      </li>

      <!-- Alumni - Miao Yu -->
      <li>
        <span class="name">Miao Yu</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Wanji Technology Suzhou Research Institute</span>
      </li>

      <!-- Alumni - Zhang Jie -->
      <li>
        <span class="name">Zhang Jie</span> -
        <span class="year">2019</span>,
        <span class="degree">Master</span> in
        <span class="major">Forest Engineering</span>,
        Currently at <span class="affiliation">Sany Heavy Energy Co., Ltd.</span>
      </li>

      <!-- Alumni - Wang Yupeng -->
      <li>
        <span class="name">Wang Yupeng</span> -
        <span class="year">2019</span>,
        <span class="degree">Master</span> in
        <span class="major">Control Engineering</span>,
        Currently at <span class="affiliation">Xiaomi Communications Co., Ltd.</span>
      </li>

      <!-- Alumni - Shi Xin -->
      <li>
        <span class="name">Shi Xin</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Forestry Equipment and Informatization</span>,
        Currently <span class="affiliation">Preparing for Civil Service Exam</span>
      </li>

      <!-- Alumni - Le Xiaoxia -->
      <li>
        <span class="name">Le Xiaoxia</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Electronic Information</span>,
        Currently at <span class="affiliation">iFlytek Co., Ltd.</span>
      </li>

      <!-- Alumni - Huang Weiyi -->
      <li>
        <span class="name">Huang Weiyi</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Electronic Information</span>,
        Currently at <span class="affiliation">China North Industries Group Inner Mongolia First Machinery Group Beijing Intelligent Technology Engineering Center</span>
      </li>

      <!-- Alumni - Zhang Hengcai -->
      <li>
        <span class="name">Zhang Hengcai</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Electronic Information</span>,
        Currently at <span class="affiliation">Beijing Jingyou Tonglian Technology Co., Ltd.</span>
      </li>

      <!-- Alumni - Zhang Ruijie -->
      <li>
        <span class="name">Zhang Ruijie</span> -
        <span class="year">2020</span>,
        <span class="degree">Master</span> in
        <span class="major">Electronic Information</span>,
        Currently at <span class="affiliation">Beijing SanKuai Online Technology Co., Ltd.</span>
      </li>

    </ul>
  </div>

  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">Postdocs</h2>
    <div style="margin-bottom: 20px;">
      <div style="font-weight: bold;">Michael Green</div>
      <div style="font-size: 0.9em; color: #777;">Affiliation</div>
    </div>
    <!-- Add more postdocs... -->
  </div>

  <div style="background-color: #fff; padding: 20px; margin-bottom: 30px; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <h2 style="border-bottom: 2px solid #e0e0e0; padding-bottom: 10px; margin-bottom: 20px;">Visiting Scholars</h2>
    <div style="margin-bottom: 20px;">
      <div style="font-weight: bold;">Sarah Blue</div>
      <div style="font-size: 0.9em; color: #777;">Institution</div>
    </div>
    <!-- Add more visiting scholars... -->
  </div>
</div>
`;
            break;
        default:
            title = 'test';
            content = 'test';
            break;
    }

    FrostifyModal.set({
        title: title,
        content: content,
        onok: () => {},
        oncancel: () => {},
        isClosable: true,
        isDraggable: true,
        reverseButtons: false,
        // labels: {
        //     cancel: ''  // 将cancel标签的值设置为空字符串
        // },
    }).show();
}
// 为所有带有data-modal-content属性的超级链接添加事件监听器
var links = document.querySelectorAll('a[data-modal-content]');
links.forEach(link => {
    link.addEventListener('click', showModal);
});


// // 为所有带有data-modal-content属性的超级链接添加事件监听器
// var links = document.querySelectorAll('.pbmit-service-title a[data-modal-content]');
// links.forEach(link => {
//     link.addEventListener('click', showModal);
// });
//
// // 为所有带有data-modal-content属性的超级链接添加事件监听器
// var links = document.querySelectorAll('a[data-modal-content]');
// links.forEach(link => {
//     link.addEventListener('click', showModal);
// });
//
// // 为所有带有data-modal-content属性的超级链接添加事件监听器
// var links = document.querySelectorAll('a[data-modal-content]');
// links.forEach(link => {
//     link.addEventListener('click', showModal);
// });

