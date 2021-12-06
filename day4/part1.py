class game():
    def __init__(self, draw, board):
        self.board_numbers = board
        self.drawn_numbers = draw
        self.game_boards = []
        self.result = 0

    def start_game(self):
        board = []
        for i in range(1, len(self.board_numbers)):
            if i == 1:
                board.append([self.board_numbers[0], False])
            if i % 25 == 0:
                self.game_boards.append(board)
                board = []
            board.append([self.board_numbers[i], False])

            if board != [] and i == len(self.board_numbers)-1:
                self.game_boards.append(board)
          
    def check_winner(self):
        for num in self.drawn_numbers:
            for board in self.game_boards:
                result = False # added default result value
                for grid in board:
                    if grid[0] == num:
                        grid[1] = True
                        # checks result only when a number in on the grid
                        result = self.judge(board)
                if result:
                    self.result = self.score(board, num)
                    return
                    
    def judge(self, board):        
            indexes = []
            for grid in board:
                if grid[1] == True:
                    # print(f'Found board #{self.game_boards.index(board)} grid #{board.index(grid)} of value: {grid[0]}')
                    print(grid[0], 'grid0')
                    indexes.append(board.index(grid))
                    print(f'Index List: {indexes}')

                    #PREVIOUS: as long as the object is divisible by 5 then check for winner
                    #shouldnt be the case as the match could have been made on the 6th number or smth
                    if len(indexes) >= 5:
                        result = self.check_helper(indexes)
                        if result:
                            return True

                    ##removed the resetting of index 

                

    def check_helper(self, indexes):
        # check columns
        index = 0
        marked_count = 0
        for i in range(0,5):
            for j in range(0,25,5):
                if int(indexes[i]) == i+j:
                    marked_count+=1
                index+=1
                if index == len(indexes):
                    index = 0
                    break
            if marked_count == 5:
                print(f"COLUMN COMPLETE {indexes}")
                return True
            else:
                marked_count = 0

        #changed the way you checked rows 
        #basically checks each column line by line, if the marked_count isnt 5, it resets and continues to the other columns
        # index = 0
        # marked_count = 0
        # for i in range(0,5):
        #     for j in range(0,25, 5):
        #         if (i+j) in indexes:
        #             marked_count += 1
        #         if  marked_count == 5:
        #             print(f"COLUMN COMPLETE {indexes}")
        #             return True
        #     marked_count = 0

        # check rows
        marked_count = 0
        for i in range(0,25,5):
            for j in range(0,5):
                if int(indexes[j]) == i+j:
                    marked_count+=1
            if marked_count == 5:
                print(f"ROW COMPLETE {indexes}")
                return True
            else:
                marked_count = 0

        return False
                        
    def score(self, board, num):
        sum_of_unmarked = 0
        for grid in board:
            if grid[1] == False:
                sum_of_unmarked += grid[0]
        print(sum_of_unmarked*num)
        return sum_of_unmarked * num

def parser(lines):
    nums = []
    for i in range(2, len(lines)):
        row = lines[i].split("\n")[0]
        row = row.split(" ")
        for c in row:
            if c!= "":
                nums.append(c)
    temp = map(int, nums)
    sol = [item for item in temp]
    return sol

if __name__ == "__main__":
    with open("input.txt", encoding='utf-8') as f:
        lines = f.readlines()
    
    drawn_nums = map(int, lines[0].split(","))
    nums_list = [item for item in drawn_nums]
    board_nums = parser(lines)
    bingo = game(nums_list, board_nums)
    bingo.start_game()
    bingo.check_winner()