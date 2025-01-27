# React 
- React는 직관적이고 효율적으로 사용자 인터페이스를 구축할 수 있는 프로그래밍 도구이다.

### 1. React란?
- React는 JavaScript를 기반으로 한 UI 공구원 (Facebook에서 개발)
- 다양한 플랫폼과 애플리케이션에서 활용되는 특징적인 구조를 제공
- React는 특히 사용자의 인터페이스를 설계하고 구현하는 데 있어 효율성과 유연성을 제공

#### React의 주요 특징
1. **단방향 데이터 흐름**
   - 데이터는 부모 컴포넌트에서 자식 컴포넌트로만 전달
   - 데이터의 변화를 추적하고 관리하기 용이
   - 이는 데이터 흐름을 예측 가능하고 유지보수하기 쉽다.

2. **컴포넌트 기반 구조**
   - React의 UI 구조는 독립적이고 재사용 가능한 컴포넌트들로 구성
   - 컴포넌트들은 각자의 역할을 수행하면서 UI를 효율적으로 관리, 설계할 수 있다.

3. **가상 DOM (Virtual DOM)**
   - React는 실제 DOM 대신 가상 DOM을 사용
   - 성능 향상과 복잡한 UI에서도 효율적으로 작동할 수 있다.

4. **Props와 State**
   - **Props**: 부모 컴포넌트가 자식 컴포넌트로 데이터를 전달하는 데 사용
   -  Props는 읽기 전용이며, 데이터 흐름의 일관성을 유지
   - **State**: 컴포넌트 내부에서 선언되며, 컴포넌트의 동적인 데이터를 관리
   -  State는 컴포넌트의 상태 변화를 감지하고, 이를 기반으로 UI를 업데이트

5. **JSX (JavaScript XML)**
   - JSX는 JavaScript와 XML의 조합, UI 요소를 정의하는 데 사용
   - JSX는 React.createElement() 호출로 변환되며, 개발자가 직관적으로 UI를 설계할 수 있도록 한다.

### 2. React 컴포넌트
React 컴포넌트는 사용자 인터페이스의 기본 구성 요소
컴포넌트를 통해 UI를 설계하고 재사용 가능한 코드 구조를 만들 수 있다.

#### 컴포넌트의 종류:
1. **클래스형 컴포넌트 (Class Component)**:
   - 기존의 React에서 사용되던 방식으로, ES6 클래스 문법을 사용하여 컴포넌트를 정의
   - render() 메서드를 반드시 포함해야 하며, 라이프사이클 메서드와 state를 사용할 수 있다.

2. **함수형 컴포넌트 (Functional Component)**:
   - 최근 React에서 권장되는 방식으로, 함수 문법을 사용하여 컴포넌트를 정의
   - 간결하고 직관적이며, React Hook을 통해 state와 라이프사이클 메서드를 사용할 수 있다.

#### React Hook:
- React Hook은 함수형 컴포넌트에서도 state와 기타 React 기능을 사용할 수 있게 한다. 
- 대표적인 Hook [useState, useEffect, useContext]

### 3. JSX (JavaScript XML)
- JSX는 React에서 UI를 정의하는 데 사용하는 JavaScript 확장 문법
- HTML과 유사한 구문을 사용하며, JavaScript 코드를 포함

#### JSX의 장점:
1. **직관적인 코드 작성**:
   - JSX를 사용하면 UI 구조를 명확하고 직관적으로 표현

2. **동적 데이터 바인딩**:
   - JSX 내부에서 중괄호 `{}`를 사용하여 JavaScript 표현식을 삽입

3. **컴파일 및 변환**:
   - Babel과 같은 도구를 사용하여 JSX를 일반 JavaScript 코드로 변환

#### JSX 예시 코드:
```jsx
function App() {
  const name = "React";
  const isLearning = true;

  return (
    <div>
      <h1>Welcome to {name}!</h1>
      {isLearning ? <p>Learning React is fun!</p> : <p>Start learning React today!</p>}
    </div>
  );
}
```
---
## State란?
State는 React에서 상태를 바꿀 수 있는 변수이다.
상태(State)는 변경될 때 React가 자동으로 렌더링을 수행해서 동적인 UI를 구현하기 용이하다.

## State와 Props의 간단한 비교
React에서는 상태 관리 및 데이터 전달을 위해 State와 Props라는 두 가지 주요 개념을 사용한다.
- Props는 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하기 위해 사용(읽기모드)
- State는 특정 컴포넌트가 자체적으로 관리하는 상태를 의미(값)

## 함수형 컴포넌트에서의 State 관리
React 16.8 버전 이후부터 함수형 컴포넌트에서도 상태 관리를 할 수 있는 `useState` 훅이 도입되면서, 클래스형 컴포넌트와 마찬가지로 함수형 컴포넌트에서도 효율적으로 상태를 관리할 수 있게 되었다.

## State 사용의 장점
- **동적인 UI 구현:** State를 사용하여 사용자의 입력, 네트워크 요청 결과 등 다양한 상황에 따라 동적으로 UI를 변경 가능
- **자동 렌더링:** 상태 변경 시 수동으로 DOM을 업데이트할 필요 없이 React가 자동으로 UI를 업데이트
- **코드 가독성 향상:** 컴포넌트 내부 상태를 명확하게 정의하고 관리할 수 있어 코드의 가독성 향상
