import csv
import json

data = []
with open('tables/fixtures/MOCK_DATA.csv', 'r') as csvfile:
    reader = csv.DictReader(csvfile)
    for i, row in enumerate(reader):
        record = {
            "model": "tables.record",
            "pk": i + 1,
            "fields":{
                "col1": row['first_name'],
                "col2": row['last_name'],
                "col3": row['email'],
                "col4": row['gender'],
                "col5": row['ip_address']
            }
        }
        
        data.append(record)
        
with open('tables/fixtures/initial_data.json', 'w') as jsonfile:
    json.dump(data, jsonfile, indent=4)