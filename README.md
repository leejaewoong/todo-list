# Supabase Todo List

Next.js와 Supabase를 활용한 할 일 관리 애플리케이션입니다.

## 주요 기능

- ✅ Todo 생성/조회/수정/삭제 (CRUD)
- 🔍 Todo 검색 기능
- ✏️ 인라인 편집 기능
- 🔄 실시간 로딩 상태 표시
- ✓ 완료 상태 체크박스

## 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **언어**: TypeScript
- **데이터베이스**: Supabase
- **상태 관리**: TanStack React Query
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: Radix UI
- **아이콘**: Lucide React

## 프로젝트 구조

```
todo-list/
├── actions/
│   └── todo-actions.ts       # Supabase Server Actions (CRUD)
├── app/
│   ├── layout.tsx            # 루트 레이아웃 (React Query Provider)
│   ├── page.tsx              # 메인 페이지
│   └── ui.tsx                # UI 컴포넌트
├── components/
│   ├── todo.tsx              # Todo 아이템 컴포넌트
│   └── ui/                   # shadcn/ui 컴포넌트
├── config/
│   └── QueryClientProvider.tsx  # React Query 설정
└── lib/
    └── supabase/
        └── client.ts         # Supabase 클라이언트
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 Supabase 프로젝트 정보를 입력합니다:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Supabase 테이블 생성

Supabase에서 다음 테이블을 생성합니다:

```sql
CREATE TABLE todo (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. 타입 생성 (선택사항)

Supabase 스키마에서 TypeScript 타입을 생성합니다:

```bash
npm run generate-types
```

### 5. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인합니다.

## 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행
- `npm run generate-types` - Supabase 타입 생성

## 주요 기능 구현

### Server Actions

`actions/todo-actions.ts`에서 Supabase와 상호작용하는 서버 액션들을 관리합니다:

- `getTodos()` - Todo 목록 조회 (검색 포함)
- `createTodo()` - 새로운 Todo 생성
- `updateTodo()` - Todo 수정 (제목, 완료 상태)
- `deleteTodo()` - Todo 삭제

### React Query

TanStack React Query를 사용하여 서버 상태를 효율적으로 관리합니다:

- 캐싱을 통한 성능 최적화
- 낙관적 업데이트
- 자동 리페칭


