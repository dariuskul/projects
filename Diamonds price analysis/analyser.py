import statistics as st


class Analyser:
    def __init__(self, data, headers, continious_rows, categorical_rows):
        self.data = data
        self.headers = headers
        self.continious = continious_rows
        self.categorial = categorical_rows

    def attributes_analysis(self):
        all_data = []
        for item in self.data:
            all_data.append(list(item.__dict__.values()))
        for i in range(len(all_data[0])):
            items = []
            for row in all_data:
                items.append(row[i])
            self.analyse_column(i, items)

    def analyse_column(self, i, column):
        if i in self.continious:
            self.analyse_continious(i, column)
        elif i in self.categorial:
            self.analyse_categorical(i, column)

    def analyse_continious(self, i, column):
        dataLen = len(column)
        missingData = Analyser.missing_elements(column)
        missing_prc = missingData / dataLen * 100
        quantilies = Analyser.get_quantilies(column)
        mean = sum(column) / dataLen
        max_value = max(column)
        min_value = min(column)
        median = st.median(sorted(column))
        deviation = st.stdev(column)

        cardinal = len(Analyser.get_unique(column))
        print(
            f"Currentyly analysing {self.headers[i]} column...:  Data count: {dataLen}; Missing data: {missingData} Missing data in procents: {missing_prc}% "
            f"First quantile: {quantilies[0]}; Third quantile: {quantilies[1]}; Mean: {round(mean,3)}; Max value: {max_value}; Min value: {min_value}' Median: {median}; Deviation: {deviation} "
            f"Cardinal: {cardinal}"
        )

    def analyse_categorical(self, i, column):
        dataLen = len(column)
        missingData = Analyser.missing_elements(column)
        missing_prc = missingData / dataLen * 100
        cardinal = len(Analyser.get_unique(column))
        moda = st.mode(column)
        mode_frequency = Analyser.get_mode_frequency(column, moda)
        mode_2 = Analyser.get_2nd_mode(column, moda)
        mode_2_frequency = Analyser.get_mode_frequency(column, mode_2)
        print(
            f"Currentyly analysing {self.headers[i]} column...:  Data count: {dataLen}; Missing data: {missingData} Missing data in procents: {missing_prc}% "
            f"Cardinal: {cardinal};  Mode: {moda}; Mode frequency: {mode_frequency}; 2nd mode: {mode_2}; 2nd mode frequency: {mode_2_frequency}"
        )

    def missing_elements(data):
        count = 0
        for element in data:
            if element is None:
                count += 1

        return count

    def get_quantilies(data):
        sorted_data = sorted(data)
        first_quantilie = sorted_data[int(len(data) * 25 / 100)]  # From slides
        third_quantilie = sorted_data[int(len(data) * 75 / 100)]

        return [first_quantilie, third_quantilie]

    def get_unique(data):
        unique_el = []
        for el in data:
            if el not in unique_el:
                unique_el.append(el)

        return unique_el

    def get_mode_frequency(data, mode):
        count = 0
        for item in data:
            if item == mode:
                count += 1
        return count

    def get_2nd_mode(data, mode):
        data_copy = list.copy(data)
        for item in data_copy:
            if item == mode:
                data_copy.remove(item)
        x = st.mode(data_copy)
        return x