docker exec -i tnf-mongo sh -c "mongoimport -c Products -d tnf-server --drop" < .scripts/Products.json
docker exec -i tnf-mongo sh -c "mongoimport -c Comments -d tnf-server --drop" < .scripts/Comments.json
