This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Directory Structure

```
.
├── public/                 # 정적 파일 (이미지, 폰트 등)
│   ├── images/
│   ├── fonts/
│   └── ...
├── src/                    # 모든 소스 코드
│   ├── app/                # Next.js 13+ App Router (페이지 및 레이아웃)
│   │   ├── (web)/          # 웹사이트 라우트 그룹 (예: /about, /contact)
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── ...
│   │   ├── (dashboard)/    # 대시보드 라우트 그룹 (예: /dashboard/overview)
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   └── ...
│   │   ├── api/            # API 라우트 (Next.js API Routes)
│   │   │   ├── auth/
│   │   │   │   ├── route.ts
│   │   │   ├── users/
│   │   │   │   ├── route.ts
│   │   │   └── ...
│   │   ├── globals.css     # 전역 Tailwind CSS (postcss 설정 포함)
│   │   └── layout.tsx      # 최상위 레이아웃
│   ├── components/         # 재사용 가능한 UI 컴포넌트
│   │   ├── ui/             # Shadcn/ui 또는 Radix UI 등 라이브러리 기반 일반 UI 컴포넌트
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── common/         # 웹과 대시보드 모두에서 사용되는 공통 컴포넌트
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── ...
│   │   ├── web/            # 웹사이트 전용 컴포넌트
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   └── ...
│   │   ├── dashboard/      # 대시보드 전용 컴포넌트
│   │   │   ├── Sidebar.tsx
│   │   │   ├── DashboardCard.tsx
│   │   │   ├── Table.tsx
│   │   │   └── ...
│   │   └── forms/          # 재사용 가능한 폼 컴포넌트 (Formik, React Hook Form 등)
│   │       ├── LoginForm.tsx
│   │       ├── UserProfileForm.tsx
│   │       └── ...
│   ├── hooks/              # 재사용 가능한 React Hooks
│   │   ├── useAuth.ts
│   │   ├── useDebounce.ts
│   │   └── ...
│   ├── lib/                # 유틸리티 함수, 헬퍼 함수 등
│   │   ├── utils.ts        # 일반 유틸리티 함수
│   │   ├── api.ts          # API 호출 관련 함수 (Axios, Fetch 등)
│   │   ├── auth.ts         # 인증 관련 유틸리티
│   │   ├── constants.ts    # 전역 상수
│   │   └── ...
│   ├── types/              # TypeScript 타입 정의
│   │   ├── index.d.ts      # 전역 타입 (선택 사항)
│   │   ├── common.d.ts
│   │   ├── web.d.ts
│   │   ├── dashboard.d.ts
│   │   └── ...
│   ├── services/           # 비즈니스 로직, 데이터 가져오기 로직 (선택 사항, 규모가 클 경우)
│   │   ├── userService.ts
│   │   ├── productService.ts
│   │   └── ...
│   ├── styles/             # Tailwind CSS 외의 특정 컴포넌트 또는 페이지를 위한 추가 CSS (선택 사항)
│   │   ├── _variables.css
│   │   ├── _mixins.css
│   │   └── ...
│   └── providers/          # Context API 또는 전역 상태 관리 (Redux, Zustand 등) 프로바이더
│       ├── AuthProvider.tsx
│       ├── ThemeProvider.tsx
│       └── ...
├── tests/                  # 테스트 파일 (jest, react-testing-library 등)
│   ├── components/
│   ├── pages/
│   └── ...
├── .env.local              # 환경 변수 (로컬)
├── .env.production         # 환경 변수 (배포)
├── next.config.js          # Next.js 설정
├── postcss.config.js       # PostCSS 설정 (Tailwind CSS 필수)
├── tailwind.config.ts      # Tailwind CSS 설정
├── tsconfig.json           # TypeScript 설정
├── package.json            # 프로젝트 의존성 및 스크립트
├── README.md               # 프로젝트 설명
└── ...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
