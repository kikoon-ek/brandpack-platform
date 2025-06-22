import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  Filter, 
  Plus, 
  MoreHorizontal,
  MessageCircle,
  FileText,
  Folder,
  X,
  Send,
  Upload,
  User,
  CheckCircle,
  Circle,
  ArrowRight,
  ChevronDown,
  Download,
  Paperclip,
  Search,
  Bell,
  CheckSquare,
  Square
} from 'lucide-react';

const ProjectPage = () => {
  const [activeTab, setActiveTab] = useState('board');
  const [activeChatTab, setActiveChatTab] = useState('chat');
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState('');
  const [newCompanyType, setNewCompanyType] = useState('manufacturer');
  const [newMessage, setNewMessage] = useState('');
  const [newMemo, setNewMemo] = useState('');
  
  // 업무 상세 모달 관련 상태
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskComment, setTaskComment] = useState('');
  const [taskComments, setTaskComments] = useState({});
  const [taskProgress, setTaskProgress] = useState({});
  const [showAssigneeModal, setShowAssigneeModal] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  // 프로젝트 데이터
  const [projectsData, setProjectsData] = useState([
    {
      id: 1,
      name: 'PURE GLOW 글로우 세럼',
      description: '천연 성분 기반 글로우 세럼 개발 프로젝트',
      companies: [
        { 
          name: '코스맥스(주)', 
          type: 'manufacturer', 
          color: 'bg-blue-500', 
          avatar: 'C', 
          currentStage: 6, 
          totalStages: 9,
          hasNotification: true
        },
        { 
          name: '연우', 
          type: 'container', 
          color: 'bg-green-500', 
          avatar: '연', 
          currentStage: 8, 
          totalStages: 11,
          hasNotification: true
        },
        { 
          name: '아토즈', 
          type: 'package', 
          color: 'bg-purple-500', 
          avatar: 'A', 
          currentStage: 5, 
          totalStages: 11,
          hasNotification: false
        }
      ],
      progress: 75,
      status: 'active',
      team: '8명',
      dueDate: '2024년 7월 15일',
      priority: 'high',
      kanbanTasks: {
        planned: [
          { id: 1, title: '최종 품질 검사', company: '코스맥스(주)', priority: 'high', dueDate: '7월 10일', assignee: '김품질' },
          { id: 2, title: '라벨 최종 승인', company: '아토즈', priority: 'medium', dueDate: '7월 12일', assignee: '박디자인' }
        ],
        progress: [
          { id: 3, title: '용기 생산 진행', company: '연우', priority: 'high', dueDate: '7월 8일', assignee: '이생산' },
          { id: 4, title: '패키지 샘플 제작', company: '아토즈', priority: 'medium', dueDate: '7월 9일', assignee: '최샘플' }
        ],
        review: [
          { id: 5, title: '제형 안정성 테스트', company: '코스맥스(주)', priority: 'high', dueDate: '7월 5일', assignee: '정안정' }
        ],
        done: [
          { id: 6, title: '제형 개발 완료', company: '코스맥스(주)', priority: 'high', dueDate: '6월 30일', assignee: '김개발' },
          { id: 7, title: '용기 디자인 확정', company: '연우', priority: 'medium', dueDate: '6월 28일', assignee: '박용기' }
        ]
      }
    },
    {
      id: 2,
      name: 'AC RESET 여드름 케어',
      description: '민감성 피부를 위한 순한 여드름 케어 라인',
      companies: [
        { 
          name: '코스맥스(주)', 
          type: 'manufacturer', 
          color: 'bg-blue-500', 
          avatar: 'C', 
          currentStage: 3, 
          totalStages: 9,
          hasNotification: false
        },
        { 
          name: '글로벌팩', 
          type: 'container', 
          color: 'bg-yellow-500', 
          avatar: 'G', 
          currentStage: 2, 
          totalStages: 11,
          hasNotification: true
        }
      ],
      progress: 35,
      status: 'active',
      team: '5명',
      dueDate: '2024년 8월 30일',
      priority: 'medium',
      kanbanTasks: {
        planned: [
          { id: 8, title: '원료 조달 계획', company: '코스맥스(주)', priority: 'high', dueDate: '7월 20일', assignee: '김원료' },
          { id: 9, title: '용기 사양 검토', company: '글로벌팩', priority: 'medium', dueDate: '7월 25일', assignee: '이용기' }
        ],
        progress: [
          { id: 10, title: '제형 연구개발', company: '코스맥스(주)', priority: 'high', dueDate: '7월 15일', assignee: '박연구' }
        ],
        review: [
          { id: 11, title: '컨셉 기획서 검토', company: '코스맥스(주)', priority: 'medium', dueDate: '7월 10일', assignee: '정기획' }
        ],
        done: [
          { id: 12, title: '시장 조사 완료', company: '코스맥스(주)', priority: 'low', dueDate: '6월 20일', assignee: '최조사' }
        ]
      }
    },
    {
      id: 3,
      name: 'MILD FLOW 순한 클렌징',
      description: '아기도 사용할 수 있는 초순한 클렌징 제품',
      companies: [
        { 
          name: '뷰티플러스', 
          type: 'manufacturer', 
          color: 'bg-red-500', 
          avatar: 'B', 
          currentStage: 5, 
          totalStages: 9,
          hasNotification: false
        },
        { 
          name: '연우', 
          type: 'container', 
          color: 'bg-green-500', 
          avatar: '연', 
          currentStage: 4, 
          totalStages: 11,
          hasNotification: false
        },
        { 
          name: '아토즈', 
          type: 'package', 
          color: 'bg-purple-500', 
          avatar: 'A', 
          currentStage: 3, 
          totalStages: 11,
          hasNotification: true
        }
      ],
      progress: 60,
      status: 'active',
      team: '6명',
      dueDate: '2024년 9월 10일',
      priority: 'medium',
      kanbanTasks: {
        planned: [
          { id: 13, title: '임상 테스트 준비', company: '뷰티플러스', priority: 'high', dueDate: '8월 1일', assignee: '김임상' }
        ],
        progress: [
          { id: 14, title: '용기 금형 제작', company: '연우', priority: 'medium', dueDate: '7월 30일', assignee: '박금형' },
          { id: 15, title: '라벨 디자인 작업', company: '아토즈', priority: 'medium', dueDate: '8월 5일', assignee: '이디자인' }
        ],
        review: [
          { id: 16, title: '제형 순함 테스트', company: '뷰티플러스', priority: 'high', dueDate: '7월 25일', assignee: '정순함' }
        ],
        done: [
          { id: 17, title: '기초 제형 개발', company: '뷰티플러스', priority: 'high', dueDate: '7월 15일', assignee: '최제형' },
          { id: 18, title: '용기 디자인 승인', company: '연우', priority: 'medium', dueDate: '7월 10일', assignee: '김승인' }
        ]
      }
    }
  ]);

  // 업체별 데이터
  const [companyData, setCompanyData] = useState({
    1: { // 프로젝트 1
      '코스맥스(주)': {
        chatMessages: [
          { id: 1, sender: 'company', company: { name: '코스맥스(주)', color: 'bg-blue-500', avatar: 'C' }, message: '제형 안정성 테스트 결과가 나왔습니다. 모든 항목에서 기준치를 통과했습니다.', time: '오전 9:30', date: '오늘' },
          { id: 2, sender: 'user', message: '좋은 소식이네요! 다음 단계로 진행 가능할까요?', time: '오전 9:35', date: '오늘' },
          { id: 3, sender: 'company', company: { name: '코스맥스(주)', color: 'bg-blue-500', avatar: 'C' }, message: '네, 최종 품질 검사 준비가 완료되었습니다. 내일 시작 예정입니다.', time: '오전 10:00', date: '오늘' }
        ],
        memos: [
          { id: 1, title: '제형 특이사항', content: '비타민C 농도 15%로 최종 확정. 안정성 테스트 통과 확인됨.', color: 'bg-yellow-100', author: '제형 개발팀', date: '2024.06.30' },
          { id: 2, title: '품질 기준', content: 'pH 6.0±0.5, 점도 3000±500cps, 안정성 6개월 이상 유지', color: 'bg-blue-100', author: '품질 관리팀', date: '2024.07.01' }
        ],
        files: [
          { id: 1, name: '제형_안정성_테스트_결과.pdf', type: 'pdf', size: '2.3MB', uploadDate: '2024.07.03', uploader: '코스맥스(주)' },
          { id: 2, name: '제형_개발_보고서.docx', type: 'document', size: '1.8MB', uploadDate: '2024.06.30', uploader: '코스맥스(주)' },
          { id: 3, name: '품질_검사_체크리스트.xlsx', type: 'excel', size: '890KB', uploadDate: '2024.07.02', uploader: '코스맥스(주)' }
        ]
      },
      '연우': {
        chatMessages: [
          { id: 4, sender: 'company', company: { name: '연우', color: 'bg-green-500', avatar: '연' }, message: '용기 생산 라인 준비가 완료되었습니다. 내일부터 본격 생산 시작 예정입니다.', time: '오전 10:15', date: '오늘' },
          { id: 5, sender: 'user', message: '생산 일정에 맞춰 진행해주세요. 품질 관리도 부탁드립니다.', time: '오전 10:20', date: '오늘' },
          { id: 6, sender: 'company', company: { name: '연우', color: 'bg-green-500', avatar: '연' }, message: '드로퍼 타입으로 변경된 용기 샘플이 완성되었습니다. 확인 부탁드립니다.', time: '오후 2:00', date: '오늘' }
        ],
        memos: [
          { id: 3, title: '용기 변경사항', content: '펌프 타입을 드로퍼로 변경. 사용성 테스트 결과 반영.', color: 'bg-green-100', author: '용기 설계팀', date: '2024.07.01' },
          { id: 4, title: '생산 일정', content: '7월 8일부터 본격 생산 시작. 일일 생산량 5,000개 목표', color: 'bg-blue-100', author: '생산 관리팀', date: '2024.07.03' }
        ],
        files: [
          { id: 4, name: '용기_디자인_최종.ai', type: 'design', size: '15.7MB', uploadDate: '2024.06.28', uploader: '연우' },
          { id: 5, name: '드로퍼_사양서.pdf', type: 'pdf', size: '3.1MB', uploadDate: '2024.07.01', uploader: '연우' },
          { id: 6, name: '생산_일정표.xlsx', type: 'excel', size: '1.2MB', uploadDate: '2024.07.03', uploader: '연우' }
        ]
      },
      '아토즈': {
        chatMessages: [
          { id: 7, sender: 'company', company: { name: '아토즈', color: 'bg-purple-500', avatar: 'A' }, message: '패키지 샘플 3종이 완성되었습니다. 검토 부탁드립니다.', time: '오후 2:20', date: '오늘' },
          { id: 8, sender: 'user', message: '샘플 확인했습니다. 2번 디자인으로 진행해주세요.', time: '오후 2:25', date: '오늘' },
          { id: 9, sender: 'company', company: { name: '아토즈', color: 'bg-purple-500', avatar: 'A' }, message: '라벨 최종 승인 후 대량 생산 준비하겠습니다.', time: '오후 3:00', date: '오늘' }
        ],
        memos: [
          { id: 5, title: '패키지 컨셉', content: '미니멀 디자인, 골드 포인트, 프리미엄 느낌 강조', color: 'bg-purple-100', author: '패키지 디자인팀', date: '2024.07.02' },
          { id: 6, title: '친환경 포장', content: '재활용 가능한 소재 사용, FSC 인증 종이 적용 검토', color: 'bg-green-100', author: '지속가능경영팀', date: '2024.07.03' }
        ],
        files: [
          { id: 7, name: '패키지_샘플_사진.zip', type: 'image', size: '8.9MB', uploadDate: '2024.07.03', uploader: '아토즈' },
          { id: 8, name: '라벨_디자인_시안.psd', type: 'design', size: '12.4MB', uploadDate: '2024.07.02', uploader: '아토즈' }
        ]
      }
    },
    2: { // 프로젝트 2
      '코스맥스(주)': {
        chatMessages: [
          { id: 10, sender: 'company', company: { name: '코스맥스(주)', color: 'bg-blue-500', avatar: 'C' }, message: '여드름 케어 제형 연구가 진행 중입니다. 살리실산 농도 조정 중이에요.', time: '오전 11:20', date: '어제' },
          { id: 11, sender: 'user', message: '민감성 피부도 고려해서 순한 성분으로 부탁드립니다.', time: '오전 11:25', date: '어제' }
        ],
        memos: [
          { id: 7, title: '타겟 고객', content: '10-20대 여성, 민감성 피부, 순한 여드름 케어 제품 선호', color: 'bg-pink-100', author: '마케팅 팀', date: '2024.06.20' }
        ],
        files: [
          { id: 9, name: '시장조사_보고서.pdf', type: 'pdf', size: '4.1MB', uploadDate: '2024.06.20', uploader: '마케팅 팀' },
          { id: 10, name: '제형_연구_계획서.docx', type: 'document', size: '890KB', uploadDate: '2024.06.25', uploader: '코스맥스(주)' }
        ]
      },
      '글로벌팩': {
        chatMessages: [
          { id: 12, sender: 'company', company: { name: '글로벌팩', color: 'bg-yellow-500', avatar: 'G' }, message: '에어리스 용기 샘플을 준비했습니다. 검토해보시겠어요?', time: '오후 3:40', date: '어제' },
          { id: 13, sender: 'user', message: '네, 샘플 확인 후 연락드리겠습니다.', time: '오후 3:45', date: '어제' }
        ],
        memos: [
          { id: 8, title: '용기 사양', content: '에어리스 펌프, 30ml 용량, 무광 화이트 마감', color: 'bg-yellow-100', author: '용기 개발팀', date: '2024.06.22' }
        ],
        files: [
          { id: 11, name: '용기_참고_이미지.jpg', type: 'image', size: '2.1MB', uploadDate: '2024.07.01', uploader: '글로벌팩' }
        ]
      }
    },
    3: { // 프로젝트 3
      '뷰티플러스': {
        chatMessages: [
          { id: 14, sender: 'company', company: { name: '뷰티플러스', color: 'bg-red-500', avatar: 'B' }, message: '순함 테스트 결과 pH 5.5로 최적화되었습니다. 아기 피부에도 안전합니다.', time: '오후 1:15', date: '오늘' },
          { id: 15, sender: 'user', message: '훌륭하네요! 임상 테스트는 언제 시작 가능한가요?', time: '오후 1:20', date: '오늘' }
        ],
        memos: [
          { id: 9, title: '순함 기준', content: 'pH 5.5 유지, 무향료, 무색소, 무파라벤 원칙 준수', color: 'bg-green-100', author: '제품 개발팀', date: '2024.07.01' }
        ],
        files: [
          { id: 12, name: '순함_테스트_결과.pdf', type: 'pdf', size: '1.8MB', uploadDate: '2024.07.20', uploader: '뷰티플러스' }
        ]
      },
      '연우': {
        chatMessages: [
          { id: 16, sender: 'company', company: { name: '연우', color: 'bg-green-500', avatar: '연' }, message: '펌프 용기 금형이 90% 완성되었습니다. 다음 주 샘플 제작 예정입니다.', time: '오후 2:30', date: '오늘' }
        ],
        memos: [
          { id: 10, title: '생산 일정', content: '7월 30일 금형 완성, 8월 5일 샘플 제작 시작', color: 'bg-blue-100', author: '생산 관리팀', date: '2024.07.25' }
        ],
        files: [
          { id: 13, name: '용기_금형_도면.dwg', type: 'cad', size: '3.2MB', uploadDate: '2024.07.18', uploader: '연우' }
        ]
      },
      '아토즈': {
        chatMessages: [
          { id: 17, sender: 'company', company: { name: '아토즈', color: 'bg-purple-500', avatar: 'A' }, message: '친환경 라벨 디자인 작업이 진행 중입니다. 내일 시안을 보내드리겠습니다.', time: '오후 4:00', date: '오늘' }
        ],
        memos: [
          { id: 11, title: '패키징 컨셉', content: '파스텔 톤, 아기 친화적 디자인, 안전성 강조', color: 'bg-blue-100', author: '디자인 팀', date: '2024.07.05' }
        ],
        files: [
          { id: 14, name: '라벨_디자인_시안.psd', type: 'design', size: '12.4MB', uploadDate: '2024.07.22', uploader: '아토즈' }
        ]
      }
    }
  });

  // 현재 선택된 프로젝트와 업체 데이터
  const currentProject = projectsData[selectedProject];
  const selectedCompanyName = currentProject?.companies[selectedCompany]?.name;
  const currentCompanyData = companyData[currentProject?.id]?.[selectedCompanyName] || {
    chatMessages: [],
    memos: [],
    files: []
  };

  // 유틸리티 함수들
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf': return '📄';
      case 'excel': return '📊';
      case 'document': return '📝';
      case 'image': return '🖼️';
      case 'design': return '🎨';
      case 'cad': return '📐';
      default: return '📎';
    }
  };

  // 알림 확인 처리
  const clearNotification = (companyIndex) => {
    const updatedProjects = [...projectsData];
    updatedProjects[selectedProject].companies[companyIndex].hasNotification = false;
    setProjectsData(updatedProjects);
  };

  // 프로젝트 추가
  const handleAddProject = () => {
    if (!newProjectName.trim()) return;

    const newProject = {
      id: projectsData.length + 1,
      name: newProjectName,
      description: '새로운 프로젝트입니다.',
      companies: [
        { 
          name: '코스맥스(주)', 
          type: 'manufacturer', 
          color: 'bg-blue-500', 
          avatar: 'C', 
          currentStage: 1, 
          totalStages: 9,
          hasNotification: false
        }
      ],
      progress: 0,
      status: 'planning',
      team: '1명',
      dueDate: '미정',
      priority: 'medium',
      kanbanTasks: { planned: [], progress: [], review: [], done: [] }
    };

    setProjectsData([...projectsData, newProject]);
    setNewProjectName('');
    setShowAddProjectModal(false);
    setSelectedProject(projectsData.length);
  };

  // 업체 추가
  const handleAddCompany = () => {
    if (!newCompanyName.trim()) return;

    const colors = ['bg-indigo-500', 'bg-pink-500', 'bg-orange-500', 'bg-teal-500', 'bg-cyan-500'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const newCompany = {
      name: newCompanyName,
      type: newCompanyType,
      color: randomColor,
      avatar: newCompanyName.charAt(0).toUpperCase(),
      currentStage: 1,
      totalStages: newCompanyType === 'manufacturer' ? 9 : 11,
      hasNotification: false
    };

    const updatedProjects = [...projectsData];
    updatedProjects[selectedProject].companies.push(newCompany);
    setProjectsData(updatedProjects);
    
    setNewCompanyName('');
    setNewCompanyType('manufacturer');
    setShowAddCompanyModal(false);
  };

  // 메시지 전송
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      message: newMessage,
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      date: '방금'
    };

    const projectId = currentProject.id;
    const companyName = selectedCompanyName;
    
    setCompanyData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [companyName]: {
          ...prev[projectId]?.[companyName],
          chatMessages: [...(prev[projectId]?.[companyName]?.chatMessages || []), userMessage]
        }
      }
    }));
    
    setNewMessage('');

    // 자동 응답
    setTimeout(() => {
      const responses = [
        '확인했습니다. 검토 후 답변드리겠습니다.',
        '네, 알겠습니다. 진행하겠습니다.',
        '좋은 의견이네요. 반영해보겠습니다.',
        '일정 확인 후 연락드리겠습니다.',
        '관련 자료 준비해서 공유드리겠습니다.'
      ];
      
      const autoReply = {
        id: Date.now() + 1,
        sender: 'company',
        company: currentProject.companies[selectedCompany],
        message: responses[Math.floor(Math.random() * responses.length)],
        time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        date: '방금'
      };
      
      setCompanyData(prev => ({
        ...prev,
        [projectId]: {
          ...prev[projectId],
          [companyName]: {
            ...prev[projectId]?.[companyName],
            chatMessages: [...(prev[projectId]?.[companyName]?.chatMessages || []), autoReply]
          }
        }
      }));
    }, 1000);
  };

  // 메모 추가
  const handleAddMemo = () => {
    if (!newMemo.trim()) return;

    const colors = ['bg-yellow-100', 'bg-blue-100', 'bg-green-100', 'bg-pink-100', 'bg-purple-100'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const memo = {
      id: Date.now(),
      title: `메모 ${(currentCompanyData.memos?.length || 0) + 1}`,
      content: newMemo,
      color: randomColor,
      author: '사용자',
      date: new Date().toLocaleDateString('ko-KR')
    };

    const projectId = currentProject.id;
    const companyName = selectedCompanyName;
    
    setCompanyData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [companyName]: {
          ...prev[projectId]?.[companyName],
          memos: [...(prev[projectId]?.[companyName]?.memos || []), memo]
        }
      }
    }));
    
    setNewMemo('');
  };

  // 메모 삭제
  const handleDeleteMemo = (memoId) => {
    const projectId = currentProject.id;
    const companyName = selectedCompanyName;
    
    setCompanyData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [companyName]: {
          ...prev[projectId]?.[companyName],
          memos: (prev[projectId]?.[companyName]?.memos || []).filter(memo => memo.id !== memoId)
        }
      }
    }));
  };

  // 파일 추가 시뮬레이션
  const handleAddFile = () => {
    const fileTypes = ['pdf', 'excel', 'document', 'image', 'design'];
    const fileNames = ['새_문서', '보고서', '이미지', '디자인_파일', '데이터'];
    const randomType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    const randomName = fileNames[Math.floor(Math.random() * fileNames.length)];

    const file = {
      id: Date.now(),
      name: `${randomName}_${Date.now()}.${randomType === 'excel' ? 'xlsx' : randomType === 'document' ? 'docx' : randomType}`,
      type: randomType,
      size: `${(Math.random() * 10 + 1).toFixed(1)}MB`,
      uploadDate: new Date().toLocaleDateString('ko-KR'),
      uploader: selectedCompanyName
    };

    const projectId = currentProject.id;
    const companyName = selectedCompanyName;
    
    setCompanyData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [companyName]: {
          ...prev[projectId]?.[companyName],
          files: [...(prev[projectId]?.[companyName]?.files || []), file]
        }
      }
    }));
  };

  // 파일 삭제
  const handleDeleteFile = (fileId) => {
    const projectId = currentProject.id;
    const companyName = selectedCompanyName;
    
    setCompanyData(prev => ({
      ...prev,
      [projectId]: {
        ...prev[projectId],
        [companyName]: {
          ...prev[projectId]?.[companyName],
          files: (prev[projectId]?.[companyName]?.files || []).filter(file => file.id !== fileId)
        }
      }
    }));
  };

  // 업무 카드 클릭 처리
  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };

  // 업무 상태 토글
  const handleTaskStatusToggle = (taskId) => {
    const updatedProjects = [...projectsData];
    const project = updatedProjects[selectedProject];
    
    // 모든 칸반 컬럼에서 해당 업무 찾기
    Object.keys(project.kanbanTasks).forEach(column => {
      const taskIndex = project.kanbanTasks[column].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        const task = project.kanbanTasks[column][taskIndex];
        task.completed = !task.completed;
        
        // 진행률 업데이트
        setTaskProgress(prev => ({
          ...prev,
          [taskId]: task.completed ? 100 : (prev[taskId] || 0)
        }));
      }
    });
    
    setProjectsData(updatedProjects);
  };

  // 담당자 변경
  const handleAssigneeChange = (taskId, newAssignee) => {
    const updatedProjects = [...projectsData];
    const project = updatedProjects[selectedProject];
    
    Object.keys(project.kanbanTasks).forEach(column => {
      const taskIndex = project.kanbanTasks[column].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        project.kanbanTasks[column][taskIndex].assignee = newAssignee;
      }
    });
    
    setProjectsData(updatedProjects);
    setShowAssigneeModal(false);
  };

  // 우선순위 변경
  const handlePriorityChange = (taskId, newPriority) => {
    const updatedProjects = [...projectsData];
    const project = updatedProjects[selectedProject];
    
    Object.keys(project.kanbanTasks).forEach(column => {
      const taskIndex = project.kanbanTasks[column].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        project.kanbanTasks[column][taskIndex].priority = newPriority;
      }
    });
    
    setProjectsData(updatedProjects);
  };

  // 마감일 변경
  const handleDueDateChange = (taskId, newDate) => {
    const updatedProjects = [...projectsData];
    const project = updatedProjects[selectedProject];
    
    Object.keys(project.kanbanTasks).forEach(column => {
      const taskIndex = project.kanbanTasks[column].findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        project.kanbanTasks[column][taskIndex].dueDate = newDate;
      }
    });
    
    setProjectsData(updatedProjects);
    setShowDatePicker(false);
  };

  // 업무 댓글 추가
  const handleAddTaskComment = () => {
    if (!taskComment.trim() || !selectedTask) return;

    const comment = {
      id: Date.now(),
      text: taskComment,
      author: '사용자',
      time: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString('ko-KR')
    };

    setTaskComments(prev => ({
      ...prev,
      [selectedTask.id]: [...(prev[selectedTask.id] || []), comment]
    }));
    
    setTaskComment('');
  };

  // 진행률 업데이트
  const handleProgressUpdate = (taskId, progress) => {
    setTaskProgress(prev => ({
      ...prev,
      [taskId]: progress
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900">프로젝트 관리</h1>
        <p className="text-gray-600 mt-1">업체별 데이터 분리와 알림 시스템이 포함된 프로젝트 관리</p>
      </div>

      <div className="flex h-screen">
        {/* 좌측 프로젝트 리스트 */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">프로젝트</h2>
              <button
                onClick={() => setShowAddProjectModal(true)}
                className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                title="새 프로젝트 추가"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            {/* 스크롤 가능한 프로젝트 리스트 */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
              {projectsData.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProject(index);
                    setSelectedCompany(0);
                  }}
                  className={`w-full p-4 rounded-lg border text-left transition-all ${
                    selectedProject === index
                      ? 'border-blue-500 bg-blue-50 shadow-sm'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 text-sm">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status === 'active' ? '진행중' : '계획중'}
                    </span>
                  </div>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="mb-3">
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                      <span>진행률</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>{project.team}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{project.dueDate.split(' ')[2]}월 {project.dueDate.split(' ')[3]}</span>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(project.priority)}`}>
                      {project.priority === 'high' ? '높음' : project.priority === 'medium' ? '보통' : '낮음'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 업체 목록 */}
          <div className="flex-1 p-4 min-h-0">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-900 text-sm">참여 업체</h3>
              <button
                onClick={() => setShowAddCompanyModal(true)}
                className="p-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                title="업체 추가"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            
            {/* 스크롤 가능한 업체 리스트 */}
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {currentProject?.companies.map((company, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedCompany(index);
                    clearNotification(index);
                  }}
                  className={`w-full flex items-center space-x-2 p-2 rounded-md transition-colors text-sm relative ${
                    selectedCompany === index
                      ? 'bg-blue-50 border border-blue-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-6 h-6 ${company.color} rounded-full flex items-center justify-center text-white font-semibold text-xs relative`}>
                    {company.avatar}
                    {/* 알림 배지 */}
                    {company.hasNotification && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <div className="font-medium text-gray-900 text-xs truncate">{company.name}</div>
                    <div className="text-xs text-gray-600">
                      {company.type === 'manufacturer' ? '제조사' : 
                       company.type === 'container' ? '용기사' : '패키지사'}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0">
                    {company.currentStage}/{company.totalStages}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 중앙 메인 영역 */}
        <div className="flex-1 flex flex-col">
          {/* 프로젝트 헤더 */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentProject?.name}
                </h2>
                <p className="text-gray-600 mt-1">
                  {currentProject?.description}
                </p>
                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                  <span>참여업체: {currentProject?.companies.map(c => c.name).join(', ')}</span>
                  <span>•</span>
                  <span>마감일: {currentProject?.dueDate}</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center">
                  <Filter className="w-4 h-4 mr-2" />
                  필터
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  업무 추가
                </button>
              </div>
            </div>

            {/* 탭 네비게이션 */}
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
              <button
                onClick={() => setActiveTab('board')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'board'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                칸반 보드
              </button>
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'timeline'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                타임라인
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'calendar'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                캘린더
              </button>
            </div>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="flex-1 overflow-hidden">
            {activeTab === 'board' && (
              <div className="h-full p-6">
                <div className="grid grid-cols-4 gap-6 h-full">
                  {[
                    { id: 'planned', title: '예정', color: 'bg-gray-100', tasks: currentProject?.kanbanTasks.planned || [] },
                    { id: 'progress', title: '진행중', color: 'bg-blue-100', tasks: currentProject?.kanbanTasks.progress || [] },
                    { id: 'review', title: '검토', color: 'bg-yellow-100', tasks: currentProject?.kanbanTasks.review || [] },
                    { id: 'done', title: '완료', color: 'bg-green-100', tasks: currentProject?.kanbanTasks.done || [] }
                  ].map((column) => (
                    <div key={column.id} className="flex flex-col">
                      <div className={`${column.color} rounded-lg p-3 mb-4`}>
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900">{column.title}</h3>
                          <span className="bg-white px-2 py-1 rounded-full text-xs font-medium text-gray-600">
                            {column.tasks.length}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-3 overflow-y-auto">
                        {column.tasks.map((task) => (
                          <div
                            key={task.id}
                            className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => handleTaskClick(task)}
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900 text-sm">{task.title}</h4>
                              <button 
                                className="text-gray-400 hover:text-gray-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // 메뉴 옵션 표시
                                }}
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                            </div>
                            
                            <p className="text-xs text-gray-600 mb-2">{task.company}</p>
                            <p className="text-xs text-gray-500 mb-3">담당자: {task.assignee}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                                {task.priority === 'high' ? '높음' : task.priority === 'medium' ? '보통' : '낮음'}
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center text-xs text-gray-500">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {task.dueDate}
                                </div>
                                <input 
                                  type="checkbox" 
                                  checked={task.completed || false}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    handleTaskStatusToggle(task.id);
                                  }}
                                  className="w-4 h-4 text-blue-600"
                                />
                              </div>
                            </div>
                            
                            {/* 진행률 바 */}
                            <div className="mt-3">
                              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                                <span>진행률</span>
                                <span>{taskProgress[task.id] || 0}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div 
                                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300" 
                                  style={{ width: `${taskProgress[task.id] || 0}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                        
                        <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors">
                          <Plus className="w-4 h-4 mx-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="h-full p-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 타임라인</h3>
                  <div className="space-y-4">
                    {currentProject?.kanbanTasks.progress.concat(currentProject?.kanbanTasks.planned).map((task, index) => (
                      <div key={task.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{task.title}</h4>
                          <p className="text-sm text-gray-600">{task.company} • {task.assignee}</p>
                        </div>
                        <div className="text-sm text-gray-500">{task.dueDate}</div>
                        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                          {task.priority === 'high' ? '높음' : task.priority === 'medium' ? '보통' : '낮음'}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="h-full p-6">
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 캘린더</h3>
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                      <div key={day} className="p-2 text-center font-medium text-gray-600 bg-gray-100 rounded">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {Array.from({ length: 35 }, (_, i) => {
                      const day = i - 6;
                      const isToday = day === new Date().getDate();
                      const hasEvent = [5, 8, 10, 15, 20, 25, 30].includes(day);
                      
                      return (
                        <div
                          key={i}
                          className={`p-2 h-20 border border-gray-200 rounded ${
                            day > 0 && day <= 31 ? 'bg-white' : 'bg-gray-50'
                          } ${isToday ? 'bg-blue-50 border-blue-300' : ''}`}
                        >
                          {day > 0 && day <= 31 && (
                            <>
                              <div className={`text-sm ${isToday ? 'font-bold text-blue-600' : 'text-gray-900'}`}>
                                {day}
                              </div>
                              {hasEvent && (
                                <div className="mt-1">
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 우측 협업 영역 */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {/* 탭 헤더 */}
          <div className="border-b border-gray-200">
            <div className="p-3 bg-gray-50 text-center text-sm font-medium text-gray-700">
              {selectedCompanyName} 협업 공간
            </div>
            <div className="flex">
              <button
                onClick={() => setActiveChatTab('chat')}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeChatTab === 'chat'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <MessageCircle className="w-4 h-4 inline mr-2" />
                채팅
              </button>
              <button
                onClick={() => setActiveChatTab('memo')}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeChatTab === 'memo'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <FileText className="w-4 h-4 inline mr-2" />
                메모
              </button>
              <button
                onClick={() => setActiveChatTab('files')}
                className={`flex-1 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeChatTab === 'files'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Folder className="w-4 h-4 inline mr-2" />
                파일
              </button>
            </div>
          </div>

          {/* 콘텐츠 영역 */}
          <div className="flex-1 flex flex-col">
            {activeChatTab === 'chat' && (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                  {currentCompanyData.chatMessages.map((message) => (
                    <div key={message.id} className={`flex items-start space-x-3 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 ${message.sender === 'user' ? 'bg-blue-500' : message.company?.color} rounded-full flex items-center justify-center text-white font-semibold text-xs`}>
                        {message.sender === 'user' ? '나' : message.company?.avatar}
                      </div>
                      <div className="flex-1 max-w-xs">
                        <div className={`${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'} rounded-lg p-3`}>
                          <p className="text-sm">{message.message}</p>
                        </div>
                        <p className={`text-xs text-gray-500 mt-1 ${message.sender === 'user' ? 'text-right' : ''}`}>
                          {message.company?.name && `${message.company.name} • `}{message.time} • {message.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <Paperclip className="w-4 h-4" />
                    </button>
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder={`${selectedCompanyName}에게 메시지 보내기...`}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button 
                      onClick={handleSendMessage}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </>
            )}

            {activeChatTab === 'memo' && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {currentCompanyData.memos.map((memo) => (
                    <div key={memo.id} className={`${memo.color} p-3 rounded-lg border border-gray-200`}>
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900 text-sm">{memo.title}</h4>
                        <button 
                          onClick={() => handleDeleteMemo(memo.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">{memo.content}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{memo.author}</span>
                        <span>{memo.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <div className="space-y-2">
                    <textarea
                      value={newMemo}
                      onChange={(e) => setNewMemo(e.target.value)}
                      placeholder={`${selectedCompanyName} 관련 메모 작성...`}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      rows="3"
                    />
                    <button 
                      onClick={handleAddMemo}
                      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      메모 추가
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeChatTab === 'files' && (
              <div className="flex-1 flex flex-col">
                <div className="flex-1 p-4 overflow-y-auto space-y-3">
                  {currentCompanyData.files.map((file) => (
                    <div key={file.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="text-2xl">{getFileIcon(file.type)}</div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 text-sm truncate">{file.name}</h4>
                        <p className="text-xs text-gray-500">{file.size} • {file.uploader}</p>
                        <p className="text-xs text-gray-400">{file.uploadDate}</p>
                      </div>
                      <div className="flex items-center space-x-1">
                        <button className="p-1 text-gray-400 hover:text-blue-500">
                          <Download className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteFile(file.id)}
                          className="p-1 text-gray-400 hover:text-red-500"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 border-t border-gray-200">
                  <button 
                    onClick={handleAddFile}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    파일 업로드
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 업무 상세 모달 */}
      {showTaskModal && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">{selectedTask.title}</h3>
              <button 
                onClick={() => setShowTaskModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* 기본 정보 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">담당 업체</label>
                  <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-900">
                    {selectedTask.company}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">담당자</label>
                  <select 
                    value={selectedTask.assignee}
                    onChange={(e) => handleAssigneeChange(selectedTask.id, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="김개발">김개발</option>
                    <option value="이생산">이생산</option>
                    <option value="박용기">박용기</option>
                    <option value="최샘플">최샘플</option>
                    <option value="정안정">정안정</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">우선순위</label>
                  <select 
                    value={selectedTask.priority}
                    onChange={(e) => handlePriorityChange(selectedTask.id, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="high">높음</option>
                    <option value="medium">보통</option>
                    <option value="low">낮음</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">마감일</label>
                  <input 
                    type="date"
                    value={selectedTask.dueDate}
                    onChange={(e) => handleDueDateChange(selectedTask.id, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* 진행률 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">진행률</label>
                <div className="flex items-center space-x-4">
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    value={taskProgress[selectedTask.id] || 0}
                    onChange={(e) => handleProgressUpdate(selectedTask.id, parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium text-gray-900 w-12">
                    {taskProgress[selectedTask.id] || 0}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${taskProgress[selectedTask.id] || 0}%` }}
                  ></div>
                </div>
              </div>

              {/* 상태 */}
              <div>
                <label className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    checked={selectedTask.completed || false}
                    onChange={() => handleTaskStatusToggle(selectedTask.id)}
                    className="w-5 h-5 text-blue-600"
                  />
                  <span className="text-sm font-medium text-gray-700">업무 완료</span>
                </label>
              </div>

              {/* 댓글 섹션 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">댓글 및 노트</h4>
                
                {/* 기존 댓글 */}
                <div className="space-y-3 mb-4 max-h-40 overflow-y-auto">
                  {(taskComments[selectedTask.id] || []).map((comment) => (
                    <div key={comment.id} className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.time} • {comment.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                  ))}
                </div>

                {/* 새 댓글 입력 */}
                <div className="flex space-x-2">
                  <input 
                    type="text"
                    value={taskComment}
                    onChange={(e) => setTaskComment(e.target.value)}
                    placeholder="댓글을 입력하세요..."
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onKeyPress={(e) => e.key === 'Enter' && handleAddTaskComment()}
                  />
                  <button 
                    onClick={handleAddTaskComment}
                    className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* 첨부파일 섹션 */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">첨부파일</h4>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">파일을 드래그하거나 클릭하여 업로드</p>
                  <button className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                    파일 선택
                  </button>
                </div>
              </div>
            </div>

            {/* 모달 하단 버튼 */}
            <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
              <button 
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
              >
                취소
              </button>
              <button 
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 프로젝트 추가 모달 */}
      {showAddProjectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">새 프로젝트 추가</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                프로젝트 이름
              </label>
              <input
                type="text"
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddProject()}
                placeholder="프로젝트 이름을 입력하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowAddProjectModal(false);
                  setNewProjectName('');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 업체 추가 모달 */}
      {showAddCompanyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">새 업체 추가</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                업체 이름
              </label>
              <input
                type="text"
                value={newCompanyName}
                onChange={(e) => setNewCompanyName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddCompany()}
                placeholder="업체 이름을 입력하세요"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                autoFocus
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                업체 유형
              </label>
              <select
                value={newCompanyType}
                onChange={(e) => setNewCompanyType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="manufacturer">제조사</option>
                <option value="container">용기사</option>
                <option value="package">패키지사</option>
              </select>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowAddCompanyModal(false);
                  setNewCompanyName('');
                  setNewCompanyType('manufacturer');
                }}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                취소
              </button>
              <button
                onClick={handleAddCompany}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage;

