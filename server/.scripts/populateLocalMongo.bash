docker exec -i tnf-mongo sh -c "mongoimport -c Products -d tnf-server --drop" < .scripts/data/Products.json
docker exec -i tnf-mongo sh -c "mongoimport -c Comments -d tnf-server --drop" < .scripts/data/Comments.json
