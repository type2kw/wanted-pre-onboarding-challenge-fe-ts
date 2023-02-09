interface Tag {
    id: number;
    name: string;
}


interface Todo {
    id: string;
    content: string;
    isFinished: boolean;
    category: string;
    tags?: Tag[];
}

/**
 * 할 일을 추가할 수 있다.
 *
 * @function
 * @param content 할 일 내용
 */
function createTodo(content: string) {}

/**
 * 모든 할 일 목록을 조회할 수 있다.
 *
 * @function
 * @param id 특정 할 일 조회시 사용한다.
 */
function getTodos(id?: string) {}

/**
 * 할 일 속성을 수정할 수 있다.
 *
 * @function
 * @param content 할 일 내용
 * @param isFinished 완료 여부
 * @param category 카테고리
 * @param tags 태그 배열
 */
function modifyTodo(content: string, isFinished: boolean, category: string, tags: Tag[]) {}


/**
 * 할 일을 삭제할 수 있다.
 *
 * @function
 * @param id 할 일 ID
 */
function deleteTodo(id: string) {}