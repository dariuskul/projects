from Diamond import Diamond
from analyser import Analyser


def read_data(file_name):
    """
    Reads data from file
    :param file_name: File name
    :return: Diamonds data, header row cell's names
    """
    _diamonds = []
    file = open(file_name, "r")
    _header = [
        item.replace('"', "").rstrip("\n") for item in file.readline().split(",")
    ]

    while True:
        line = file.readline()

        if not line:
            return _diamonds, _header

        new_diamond = Diamond().parse(line)
        _diamonds.append(new_diamond)


diamonds, headers = read_data("diamonds.csv")
continuous_columns = [1, 5, 6, 7, 8, 9, 10]
categorical_columns = [2, 3, 4]
analyser = Analyser(diamonds, headers, continuous_columns, categorical_columns)

analyser.attributes_analysis()
