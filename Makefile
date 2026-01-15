deploy: build
	@firebase deploy --only hosting
build:
	@npm run build
	@echo "Build and export completed."
install:
	npm install
	@echo "Dependencies installed."
